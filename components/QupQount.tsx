export default function QupQount() {
  const teams = [
    { name: "The Goat", wins: 1 },
    { name: "Lucy's", wins: 0 },
    { name: "Ladders", wins: 0 },
    { name: "Bonner's", wins: 0 }
  ]

  const sortedTeams = [...teams].sort((a, b) => b.wins - a.wins)

  return (
    <div className="section">
      <h2 className="section-heading">QUAKER QUP CHAMPIONSHIPS</h2>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        {sortedTeams.map((team, index) => {
          const rank = index + 1

          return (
            <div
              key={team.name}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '1rem 1.5rem',
                marginBottom: '0.75rem',
                borderRadius: '8px',
                background: '#f8f8f8',
                borderLeft: '4px solid #ae000f'
              }}
            >
              <div style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#ae000f',
                marginRight: '1rem',
                minWidth: '40px',
                textAlign: 'center'
              }}>
                #{rank}
              </div>

              <div style={{ flex: 1 }}>
                <div style={{
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  color: '#001f3f'
                }}>
                  {team.name}
                </div>
              </div>

              <div style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                color: '#001f3f',
                marginLeft: '1rem'
              }}>
                {team.wins}
                <span style={{ fontSize: '0.9rem', fontWeight: 'normal', color: '#666', marginLeft: '0.25rem' }}>
                  {team.wins === 1 ? 'win' : 'wins'}
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
