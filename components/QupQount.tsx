export default function QupQount() {
  const teams = [
    {
      name: "Black Sheep Pub Street Hockey Club",
      wins: 1,
      bar: "Black Sheep"
    },
    {
      name: "Lucy's Pub Street Hockey Club",
      wins: 0,
      bar: "Lucy's"
    },
    {
      name: "Ladder 15 Street Hockey Club",
      wins: 0,
      bar: "Ladder 15"
    },
    {
      name: "Bonner's Pub Street Hockey Club",
      wins: 0,
      bar: "Bonner's"
    }
  ]

  return (
    <div className="section">
      <h2 className="section-heading">QUP QOUNT</h2>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
          {teams.map((team, index) => (
            <div
              key={index}
              style={{
                background: '#f8f8f8',
                padding: '1.5rem',
                borderRadius: '8px',
                borderLeft: '4px solid #ae000f',
                textAlign: 'center'
              }}
            >
              <h3 style={{
                color: '#ae000f',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                marginBottom: '0.5rem'
              }}>
                {team.bar}
              </h3>
              <div style={{
                fontSize: '3rem',
                fontWeight: 'bold',
                color: '#001f3f',
                marginBottom: '0.5rem'
              }}>
                {team.wins}
              </div>
              <div style={{
                fontSize: '0.9rem',
                color: '#666',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                {team.wins === 1 ? 'Win' : 'Wins'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
