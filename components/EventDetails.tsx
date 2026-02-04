export default function EventDetails() {
  return (
    <div className="event-details">
      <h2 className="section-heading">STREET HOCKEY NIGHT IN AMERICA II</h2>
      <p style={{ textAlign: 'center', fontSize: '1.2rem', fontWeight: 'bold', color: '#001f3f', marginBottom: '1.5rem' }}>
        Saturday, February 28th
      </p>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}>
          <h3 style={{
            fontSize: '1.5rem',
            marginBottom: '0.5rem',
            fontWeight: 'bold',
            color: '#ae000f'
          }}>
            5:30 PM — Pre-Game Pre-Game
          </h3>
          <p style={{ fontSize: '1rem', color: '#001f3f' }}>
            📍 The Defending Champion's Bar: The Goat
          </p>
          <p style={{ fontSize: '0.9rem' }}>
            <a
              href="https://www.youtube.com/watch?v=mvTprAb_MaI"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#ae000f', textDecoration: 'underline' }}
            >
              🎬 Expect "Miracle On Ice Speech" level of chills
            </a>
          </p>
        </div>

        <div style={{ marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}>
          <h3 style={{
            fontSize: '1.5rem',
            marginBottom: '0.5rem',
            fontWeight: 'bold',
            color: '#ae000f'
          }}>
            7:00 PM — The Road To Victory
          </h3>
          <p style={{ fontSize: '1rem', color: '#001f3f' }}>
            📍 All teams march to the Gym, speaker in tow
          </p>
        </div>

        <div style={{ marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}>
          <h3 style={{
            fontSize: '1.5rem',
            marginBottom: '0.5rem',
            fontWeight: 'bold',
            color: '#ae000f'
          }}>
            7:30 PM — The Game
          </h3>
          <p style={{ fontSize: '1rem', color: '#001f3f', marginBottom: '0.3rem' }}>
            📍 A 4-Team Playoff at Weightman Gym
          </p>
          <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.3rem' }}>
            Wrapping up by 9:30 PM
          </p>
          <p style={{ fontSize: '0.9rem', color: '#001f3f' }}>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Weightman+Hall+235+S+33rd+St+Philadelphia+PA+19104"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#ae000f', textDecoration: 'underline' }}
            >
              Weightman Hall, 235 S 33rd St, Philadelphia, PA 19104
            </a>
          </p>
        </div>

        <div>
          <h3 style={{
            fontSize: '1.5rem',
            marginBottom: '0.5rem',
            fontWeight: 'bold',
            color: '#ae000f'
          }}>
            10 PM — Post-Game Post-Game
          </h3>
          <p style={{ fontSize: '1rem', color: '#001f3f' }}>
            📍 All Teams at the Winning Team's Bar
          </p>
        </div>
      </div>
    </div>
  )
}