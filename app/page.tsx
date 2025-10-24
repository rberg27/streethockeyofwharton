import Countdown from '@/components/Countdown'
import EventDetails from '@/components/EventDetails'
import PartifulLink from '@/components/PartifulLink'
import TeamsList from '@/components/TeamsList'
import PowerRankings from '@/components/PowerRankings'

export default function Home() {
  return (
    <div className="container">
      <header className="header">
        <h1 style={{
          fontSize: '2.5rem',
          marginBottom: '0.5rem',
          background: 'linear-gradient(45deg, #f4d03f, #f7dc6f)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Street Hockey of Wharton
        </h1>
        <p style={{ fontSize: '1.5rem', color: '#fff', fontFamily: '"Lucida Handwriting", cursive' }}>
          Welcome to the SHOW!
        </p>
      </header>

      <main>
        <Countdown />
        <EventDetails />
        <PartifulLink />
        <TeamsList />
        <PowerRankings />
      </main>
    </div>
  )
}