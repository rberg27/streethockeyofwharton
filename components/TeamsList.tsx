import fs from 'fs'
import path from 'path'

interface Team {
  name: string
  bar?: string
  colors?: string[]
  players: string[]
}

const TEAM_PHOTOS: Record<string, string> = {
  "Lucy's Street Hockey Club": "/Lucy's Street Hockey Club.png",
  "Bonner's Pub Street Hockey Club": "/Bonners Street Hockey Club.png",
  "Ladders Street Hockey Club": "/Ladders Street Hockey Club.png",
  "The Goat Street Hockey Club": "/The Goat Street Hockey Club.png"
}

function parseMarkdownTeams(content: string): Team[] {
  const lines = content.split('\n')
  const teams: Team[] = []
  let currentTeam: Team | null = null
  let inFreeAgentsSection = false

  for (const line of lines) {
    // Stop parsing when we hit the Free Agents section
    if (line.startsWith('# Free Agents')) {
      inFreeAgentsSection = true
      if (currentTeam) {
        teams.push(currentTeam)
      }
      break
    }

    if (line.startsWith('## ')) {
      if (currentTeam) {
        teams.push(currentTeam)
      }
      currentTeam = {
        name: line.replace('## ', ''),
        players: []
      }
    } else if (line.startsWith('**Hometown Bar:**') && currentTeam) {
      currentTeam.bar = line.replace('**Hometown Bar:**', '').trim()
    } else if (line.startsWith('**Team Colors:**') && currentTeam) {
      const colorsStr = line.replace('**Team Colors:**', '').trim()
      currentTeam.colors = colorsStr.split(',').map(c => c.trim())
    } else if (line.startsWith('- ') && currentTeam) {
      currentTeam.players.push(line.replace('- ', ''))
    }
  }

  if (currentTeam && !inFreeAgentsSection) {
    teams.push(currentTeam)
  }

  return teams
}

export default function TeamsList() {
  let teams: Team[] = []

  try {
    const filePath = path.join(process.cwd(), 'teams.md')
    const fileContents = fs.readFileSync(filePath, 'utf8')
    teams = parseMarkdownTeams(fileContents)
  } catch (error) {
    console.error('Error reading teams.md:', error)
  }

  return (
    <div className="section">
      <h2 className="section-heading">TEAMS</h2>
      <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(2, 1fr)' }}>
        {teams.map((team, index) => (
          <div key={index} style={{
            background: '#f8f8f8',
            padding: '1.5rem',
            borderRadius: '8px',
            borderLeft: '4px solid #ae000f'
          }}>
            {TEAM_PHOTOS[team.name] && (
              <div style={{ marginBottom: '1rem', textAlign: 'center' }}>
                <img
                  src={TEAM_PHOTOS[team.name]}
                  alt={team.name}
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                    maxHeight: '150px',
                    borderRadius: '8px'
                  }}
                />
              </div>
            )}
            <h3 style={{ color: '#ae000f', marginBottom: '0.5rem', fontSize: '1.2rem', fontWeight: 'bold' }}>
              {team.name}
            </h3>
            {team.bar && (
              <p style={{
                color: '#001f3f',
                fontSize: '0.9rem',
                marginBottom: '0.5rem',
                fontStyle: 'italic'
              }}>
                {team.bar}
              </p>
            )}
            {team.colors && team.colors.length > 0 && (
              <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.9rem', color: '#001f3f', fontWeight: 'bold' }}>Team Colors:</span>
                {team.colors.map((color, colorIndex) => (
                  <div
                    key={colorIndex}
                    style={{
                      width: '30px',
                      height: '30px',
                      backgroundColor: color,
                      borderRadius: '4px',
                      border: '2px solid #001f3f'
                    }}
                    title={color}
                  />
                ))}
              </div>
            )}
            <ul style={{ listStyle: 'none' }}>
              {team.players.map((player, playerIndex) => (
                <li key={playerIndex} style={{
                  padding: '0.3rem 0',
                  borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                  color: '#001f3f'
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
