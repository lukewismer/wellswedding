// Force Node runtime for googleapis
export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { google } from "googleapis";

const SHEET_ID = process.env.GOOGLE_SHEETS_ID!;
const SHEET_TAB = process.env.GOOGLE_SHEETS_TAB || "Guests";

function sheetsClient() {
  const privateKey = (process.env.GOOGLE_PRIVATE_KEY || "").replace(/\\n/g, "\n");
  const auth = new google.auth.JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  return google.sheets({ version: "v4", auth });
}

function headerOffset(rows: string[][]) {
  const first = rows[0]?.[0]?.toLowerCase?.() || "";
  return first.includes("name") ? 1 : 0;
}

export async function GET() {
  try {
    const sheets = sheetsClient();
    const { data } = await sheets.spreadsheets.values.get({
      spreadsheetId: SHEET_ID,
      range: `${SHEET_TAB}!A:C`,
    });
    const rows = data.values || [];
    const off = headerOffset(rows);
    const out = rows.slice(off).map((r, i) => ({
      id: i + 1 + off,
      name: r[0] || "",
      rsvpStatus: r[1] || "",
      dietaryRestrictions: r[2] || "",
    }));
    return NextResponse.json(out);
  } catch (e) {
    console.error("GET /api/rsvp error:", e);
    return NextResponse.json({ error: "Sheet read failed" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { guestId, rsvpStatus, dietaryRestrictions } = await req.json();
    if (!guestId || !["yes", "no"].includes(String(rsvpStatus))) {
      return NextResponse.json({ error: "Bad request" }, { status: 400 });
    }
    const sheets = sheetsClient();
    const range = `${SHEET_TAB}!B${guestId}:C${guestId}`;
    await sheets.spreadsheets.values.update({
      spreadsheetId: SHEET_ID,
      range,
      valueInputOption: "USER_ENTERED",
      requestBody: { values: [[rsvpStatus, dietaryRestrictions || ""]] },
    });
    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("POST /api/rsvp error:", e);
    return NextResponse.json({ error: "Sheet update failed" }, { status: 500 });
  }
}
