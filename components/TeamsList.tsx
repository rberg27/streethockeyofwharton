import fs from 'fs'
import path from 'path'

function parseMarkdownTeams(content: string) {
  const lines = content.split('\n')
  const teams: { name: string; players: string[] }[] = []
  let currentTeam: { name: string; players: string[] } | null = null

  for (const line of lines) {
    if (line.startsWith('## ')) {
      if (currentTeam) {
        teams.push(currentTeam)
      }
      currentTeam = {
        name: line.replace('## ', ''),
        players: []
      }
    } else if (line.startsWith('- ') && currentTeam) {
      currentTeam.players.push(line.replace('- ', ''))
    }
  }

  if (currentTeam) {
    teams.push(currentTeam)
  }

  return teams
}

export default function TeamsList() {
  let teams: { name: string; players: string[] }[] = []

  try {
    const filePath = path.join(process.cwd(), 'teams.md')
    const fileContents = fs.readFileSync(filePath, 'utf8')
    teams = parseMarkdownTeams(fileContents)
  } catch (error) {
    console.error('Error reading teams.md:', error)
  }

  return (
    <div className="section">
      <h2>Teams & Players</h2>
      <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        {teams.map((team, index) => (
          <div key={index} style={{
            background: 'rgba(31, 63, 152, 0.3)',
            padding: '1.5rem',
            borderRadius: '8px',
            borderLeft: '4px solid #f4d03f'
          }}>
            <h3 style={{ color: '#f4d03f', marginBottom: '1rem', fontSize: '1.2rem' }}>
              {team.name}
            </h3>
            <ul style={{ listStyle: 'none' }}>
              {team.players.map((player, playerIndex) => (
                <li key={playerIndex} style={{
                  padding: '0.3rem 0',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#fff'
                }}>
                  {player}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}