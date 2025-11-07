'use client';
import { useState, useEffect } from 'react';
import styles from './RSVP.module.css';

type Guest = { id: number; name: string; rsvpStatus?: string; q?: string };

export default function RSVP() {
  const [guests, setGuests] = useState<Guest[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGuests, setSelectedGuests] = useState<Guest[]>([]);
  const [rsvpStatus, setRsvpStatus] = useState<'yes'|'no'|''>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [showHelp, setShowHelp] = useState(false);

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
            }),
          })
        )
      );
      setMessage('Thank you! Your RSVP decision has been submitted successfully.');
      setSelectedGuests([]);
      setRsvpStatus('');
    } catch {
      setMessage('There was an error submitting your RSVP. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="rsvp" className={`section ${styles.rsvpSection}`}>
      <div className={styles.backgroundOverlay}></div>
      <div className="container">
        <div className={styles.rsvpContainer}>
          {/* Header */}
          <div className={styles.header}>
            <h1 className={styles.title}>RSVP</h1>
            <p className={styles.welcomeMessage}>We can&apos;t wait to celebrate with you!</p>
          </div>

          {/* Guest Selection */}
          <div className={styles.guestSelection}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Find Your Name</h2>
              <div 
                className={styles.helpIcon}
                onMouseEnter={() => setShowHelp(true)}
                onMouseLeave={() => setShowHelp(false)}
              >
                ?
                {showHelp && (
                  <div className={styles.helpTooltip}>
                    <h4>How to RSVP:</h4>
                    <ol>
                      <li>Type your name in the search box below</li>
                      <li>Click on your name from the dropdown</li>
                      <li>You may select multiple names at once (e.g., select both Kara Wismer and Jeremy Wells)</li>
                      <li>Choose your attendance status</li>
                      <li>Submit your response</li>
                    </ol>
                    <p><strong>Note:</strong> You can re-submit your RSVP if you need to make changes.</p>
                  </div>
                )}
              </div>
            </div>

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
                <h3 className={styles.selectedTitle}>Selected Guests:</h3>
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

          {/* RSVP Form */}
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formSection}>
              <h2 className={styles.sectionTitle}>Will you be attending?</h2>
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
                  <span className={styles.radioText}>
                    <strong>Yes, I&apos;ll be there!</strong>
                  </span>
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
                  <span className={styles.radioText}>
                    <strong>Sorry, can&apos;t make it</strong>
                  </span>
                </label>
              </div>
            </div>

            {/* Important Info - Now just text, no card */}
            <div className={styles.importantInfo}>
              <p>
                Please RSVP for all guests listed on your invitation by searching and selecting each name when responding. 
                Due to limited space, our wedding is adults-only and by invitation only.
              </p>
            </div>

            {/* Submit Button */}
            <div className={styles.submitSection}>
              <button
                type="submit"
                disabled={isSubmitting || selectedGuests.length === 0 || !rsvpStatus}
                className={`${styles.submitButton} ${
                  (isSubmitting || selectedGuests.length === 0 || !rsvpStatus) ? styles.submitButtonDisabled : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <span className={styles.spinner}></span>
                    Submitting...
                  </>
                ) : (
                  'Submit RSVP'
                )}
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
        </div>
      </div>
    </section>
  );
}