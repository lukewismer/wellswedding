'use client'
import Hero from './components/Hero';
import InvitationCard from './components/InvitationCard';
import TheDay from './components/TheDay';
import Gifts from './components/Gifts';
import RSVP from './components/RSVP';
import IntroDate from './components/IntroDate';
import CombinedLogistics from './components/CombinedLogistics';
import FAQ from './components/FAQ';



export default function Home() {

  return (
    <main>
      {/* Hero Section */}
      <Hero />

      <IntroDate />

      <InvitationCard />

      <TheDay />

      <CombinedLogistics />


      <Gifts />

      
      <RSVP />

      <FAQ />
      
    </main>
  )
}