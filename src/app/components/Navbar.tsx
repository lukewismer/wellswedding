'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navbarContainer}`}>
        {/* Logo/Brand */}
        <div className={styles.navbarBrand}>
          <Link href="/" className={styles.brandLink}>
            Wells Wedding
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={styles.menuIcon}></span>
          <span className={styles.menuIcon}></span>
          <span className={styles.menuIcon}></span>
        </button>

        {/* Navigation Links */}
        <div className={`${styles.navbarMenu} ${isOpen ? styles.navbarMenuOpen : ''}`}>
          <div className={styles.navbarNav}>
            <Link href="/" className={styles.navLink} onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/details" className={styles.navLink} onClick={() => setIsOpen(false)}>
              Details
            </Link>
            <Link href="/rsvp" className={styles.navLink} onClick={() => setIsOpen(false)}>
              RSVP
            </Link>
          </div>
        </div>

        {/* Overlay for mobile when menu is open */}
        {isOpen && (
          <div className={styles.overlay} onClick={() => setIsOpen(false)}></div>
        )}
      </div>
    </nav>
  );
}