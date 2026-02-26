import EventDetails from '@/components/EventDetails'
import PartifulLink from '@/components/PartifulLink'
import GearOrder from '@/components/GearOrder'
import WhatIsStreetHockey from '@/components/WhatIsStreetHockey'
import TeamsList from '@/components/TeamsList'
import QupQount from '@/components/QupQount'
import FAQ from '@/components/FAQ'
import SignupForm from '@/components/SignupForm'
import TeamSignupCount from '@/components/TeamSignupCount'
import Highlights from '@/components/Highlights'
import JerseyInterest from '@/components/JerseyInterest'

export default function Home() {
  return (
    <div className="container">
      <header className="header" style={{ background: '#fff', padding: '2rem', borderRadius: '15px', marginBottom: '2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <img
            src="/Street Hockey Night in America.png"
            alt="Street Hockey Night in America"
            style={{
              maxWidth: '100%',
              height: 'auto',
              maxHeight: '300px',
              marginBottom: '1rem'
            }}
          />
        </div>
        <div style={{ textAlign: 'center', marginBottom: '0rem' }}>
          <img
            src="/Wharton Mildmen Street Hockey Club.png"
            alt="Wharton Mildmen Street Hockey Club"
            style={{
              maxWidth: '100%',
              height: 'auto',
              maxHeight: '150px',
              transform: 'translateY(0px)'
            }}
          />
        </div>
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <p style={{ fontSize: '1.2rem', color: '#001f3f', fontStyle: 'italic', margin: 0 }}>
            Organized by Wharton for the Greater Penn Grad Community
          </p>
        </div>
      </header>

      <main>
        <GearOrder />
        <WhatIsStreetHockey />
        <Highlights />
        <TeamsList />
        <JerseyInterest />
        {/* <TeamSignupCount /> */}
        <QupQount />
        {/* <SignupForm /> */}
        <EventDetails />
        <PartifulLink />
        <FAQ />
      </main>
    </div>
  )
}