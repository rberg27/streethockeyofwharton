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
        <p style={{ fontSize: '1.1rem', color: '#ccc' }}>
          Official Playoff Season Hub
        </p>
      </header>

      <main>
        <Countdown />
        <EventDetails />
        <PartifulLink />
        <TeamsList />
        <PowerRankings />
      </main>

      <footer style={{
        textAlign: 'center',
        padding: '2rem',
        marginTop: '2rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        color: '#666'
      }}>
        <p>Street Hockey of Wharton © 2025</p>
      </footer>
    </div>
  )
}