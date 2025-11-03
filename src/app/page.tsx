'use client'
import Hero from './components/Hero';
import InvitationCard from './components/InvitationCard';
import TheDay from './components/TheDay';
import GettingHere from './components/GettingHere';
import WhereToStay from './components/WhereToStay';
import Gifts from './components/Gifts';
import RSVP from './components/RSVP';


export default function Home() {

  return (
    <main>
      {/* Hero Section */}
      <Hero />

      <InvitationCard />

      <TheDay />

      <GettingHere />

      <WhereToStay />


      <Gifts />
      
      <RSVP />
      
    </main>
  )
}