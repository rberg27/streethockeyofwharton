export default function EventDetails() {
  return (
    <div className="event-details">
      <h2 className="section-heading">RUN OF SHOW</h2>
      <p style={{ textAlign: 'center', fontSize: '1.2rem', fontWeight: 'bold', color: '#001f3f', marginBottom: '1.5rem' }}>
        DATE: WEDNESDAY NOVEMBER 19TH, 2025
      </p>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}>
          <h3 style={{
            fontSize: '1.5rem',
            marginBottom: '0.5rem',
            fontWeight: 'bold',
            color: '#ae000f'
          }}>
            8:15 PM - Pre-Game Pre-Game
          </h3>
          <p style={{ fontSize: '1rem', color: '#001f3f' }}>
            📍 Each Team at their Hometown Bar
          </p>
          <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.3rem' }}>
            (Drinker's, Bonner's, Ladder 15, Black Sheep)
          </p>
        </div>

        <div style={{ marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}>
          <h3 style={{
            fontSize: '1.5rem',
            marginBottom: '0.5rem',
            fontWeight: 'bold',
            color: '#ae000f'
          }}>
            9:15 PM - Motivational Speeches
          </h3>
          <p style={{ fontSize: '1rem', color: '#001f3f', marginBottom: '0.5rem' }}>
            📍 Team Captains at their Hometown Bar
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
            10:00 PM - The Game
          </h3>
          <p style={{ fontSize: '1rem', color: '#001f3f', marginBottom: '0.3rem' }}>
            📍 Hutchinson Gymnasium
          </p>
          <p style={{ fontSize: '0.9rem', color: '#001f3f' }}>
            <a
              href="https://maps.app.goo.gl/ZaB3GTzcL6S5Ca5y7"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#ae000f', textDecoration: 'underline' }}
            >
              219 S 33rd St, Philadelphia, PA 19104
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
            12:00 AM - Post-Game Post-Game
          </h3>
          <p style={{ fontSize: '1rem', color: '#001f3f' }}>
            📍 All Teams at the Winning Team's Bar
          </p>
        </div>
      </div>
    </div>
  )
}