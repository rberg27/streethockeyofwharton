import Countdown from '@/components/Countdown'
import EventDetails from '@/components/EventDetails'
import PartifulLink from '@/components/PartifulLink'
import GearOrder from '@/components/GearOrder'
import WhatIsStreetHockey from '@/components/WhatIsStreetHockey'
import TeamsList from '@/components/TeamsList'
import FreeAgents from '@/components/FreeAgents'
import PowerRankings from '@/components/PowerRankings'
import FAQ from '@/components/FAQ'

export default function Home() {
  return (
    <div className="container">
      <header className="header" style={{ background: '#fff', padding: '2rem', borderRadius: '15px', marginBottom: '2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '0rem' }}>
          <img
            src="/Wharton Mildmen Street Hockey Club.png"
            alt="Wharton Mildmen Street Hockey Club"
            style={{
              maxWidth: '100%',
              height: 'auto',
              maxHeight: '200px',
              transform: 'translateY(0px)'
            }}
          />
        </div>
      </header>

      <main>
        <Countdown />
        <WhatIsStreetHockey />
        <EventDetails />
        <PartifulLink />
        <GearOrder />
        <TeamsList />
        <FreeAgents />
        <PowerRankings />
        <FAQ />
      </main>
    </div>
  )
}