'use client';
import { useState, useEffect } from 'react';
import styles from './page.module.css';

type Guest = { id: number; name: string; rsvpStatus?: string; dietaryRestrictions?: string; q?: string };

export default function RSVP() {
  const [guests, setGuests] = useState<Guest[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGuests, setSelectedGuests] = useState<Guest[]>([]);
  const [rsvpStatus, setRsvpStatus] = useState<'yes'|'no'|''>('');
  const [dietaryRestrictions, setDietaryRestrictions] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const norm = (s: string) =>
    s.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase().trim();

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('/api/rsvp', { cache: 'no-store' });
        if (!res.ok) throw new Error('bad status');
        const data: Guest[] = await res.json();
        setGuests(Array.isArray(data) ? data.map(g => ({ ...g, q: norm(g.name) })) : []);
      } catch {
        setGuests([]);
        setMessage('There was an error loading the guest list. Please check again later. If the issue persists let Jeremy or Kara know.');
      }
    })();
  }, []);

  const filteredGuests = (Array.isArray(guests) ? guests : []).filter(g => {
    const q = g.q ?? norm(g.name);
    const tokens = norm(searchTerm).split(/\s+|,+/).filter(Boolean);
    return tokens.every(t => q.includes(t));
  });

  const handleGuestSelect = (guest: Guest) => {
    if (!selectedGuests.find(g => g.id === guest.id)) {
      setSelectedGuests(prev => [...prev, guest]);
      setSearchTerm('');
    }
  };

  const handleRemoveGuest = (guestId: number) => {
    setSelectedGuests(prev => prev.filter(g => g.id !== guestId));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedGuests.length === 0 || !rsvpStatus) {
      setMessage('Please select at least one guest and an RSVP status.');
      return;
    }
    setIsSubmitting(true);
    setMessage('');
    try {
      await Promise.all(
        selectedGuests.map(guest =>
          fetch('/api/rsvp', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              guestId: guest.id,
              rsvpStatus,
              dietaryRestrictions,
            }),
          })
        )
      );
      setMessage('Thank you! Your RSVP decision has been submitted successfully.');
      setSelectedGuests([]);
      setRsvpStatus('');
      setDietaryRestrictions('');
    } catch {
      setMessage('There was an error submitting your RSVP. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      <section className={`section ${styles.hero}`}>
        <div className={`container ${styles.heroContent}`}>
          <h1 className={styles.heroTitle}>RSVP</h1>
          <p className={styles.heroSubtitle}>Please respond by June 25, 2026</p>
        </div>
      </section>

      <section className={`section ${styles.rsvpForm}`}>
        <div className="container">
          <div className={styles.formContainer}>
            <h2 className={styles.formTitle}>We Can&apos;t Wait to Celebrate With You!</h2>

            <div className={styles.guestSelection}>
              <h3 className={styles.sectionTitle}>Find Your Name</h3>
              <div className={styles.searchContainer}>
                <input
                  type="text"
                  placeholder="Search for your name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={styles.searchInput}
                />
                {searchTerm && filteredGuests.length > 0 && (
                  <div className={styles.searchResults}>
                    {filteredGuests.map(guest => (
                      <div
                        key={guest.id}
                        className={styles.searchResult}
                        onClick={() => handleGuestSelect(guest)}
                      >
                        {guest.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {selectedGuests.length > 0 && (
                <div className={styles.selectedGuests}>
                  <h4 className={styles.selectedTitle}>Selected Guests:</h4>
                  <div className={styles.guestList}>
                    {selectedGuests.map(guest => (
                      <div key={guest.id} className={styles.guestTag}>
                        {guest.name}
                        <button
                          type="button"
                          onClick={() => handleRemoveGuest(guest.id)}
                          className={styles.removeButton}
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formSection}>
                <h3 className={styles.sectionTitle}>Will you be attending?</h3>
                <div className={styles.attendanceOptions}>
                  <label className={styles.radioLabel}>
                    <input
                      type="radio"
                      name="attendance"
                      value="yes"
                      checked={rsvpStatus === 'yes'}
                      onChange={(e) => setRsvpStatus(e.target.value as 'yes')}
                      className={styles.radioInput}
                    />
                    <span className={styles.radioCustom}></span>
                    <span className={styles.radioText}>Yes, I&apos;ll be there!</span>
                  </label>
                  <label className={styles.radioLabel}>
                    <input
                      type="radio"
                      name="attendance"
                      value="no"
                      checked={rsvpStatus === 'no'}
                      onChange={(e) => setRsvpStatus(e.target.value as 'no')}
                      className={styles.radioInput}
                    />
                    <span className={styles.radioCustom}></span>
                    <span className={styles.radioText}>Sorry, can&apos;t make it</span>
                  </label>
                </div>
              </div>

              {rsvpStatus === 'yes' && (
                <div className={styles.formSection}>
                  <h3 className={styles.sectionTitle}>Dietary Restrictions</h3>
                  <textarea
                    placeholder="Please let us know about any dietary restrictions or allergies, leave empty if there are none..."
                    value={dietaryRestrictions}
                    onChange={(e) => setDietaryRestrictions(e.target.value)}
                    className={styles.textarea}
                    rows={4}
                  />
                </div>
              )}

              <div className={styles.formSection}>
                <button
                  type="submit"
                  disabled={isSubmitting || selectedGuests.length === 0 || !rsvpStatus}
                  className={`btn ${styles.submitButton} ${
                    (isSubmitting || selectedGuests.length === 0 || !rsvpStatus) ? styles.submitButtonDisabled : ''
                  }`}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit RSVP'}
                </button>
              </div>

              {message && (
                <div className={`${styles.message} ${
                  message.includes('error') ? styles.messageError : styles.messageSuccess
                }`}>
                  {message}
                </div>
              )}
            </form>

            <div className={styles.additionalInfo}>
              <h3 className={styles.infoTitle}>Need to make changes?</h3>
              <p className={styles.infoText}>
                If you need to update your RSVP or have any questions, 
                please contact us at{' '}
                <a href="mailto:jeremyandkara@example.com" className={styles.infoLink}>
                  jeremyandkara@example.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
