import fs from 'fs'
import path from 'path'

function parseFreeAgents(content: string): string[] {
  const lines = content.split('\n')
  const freeAgents: string[] = []
  let inFreeAgentsSection = false

  for (const line of lines) {
    if (line.startsWith('# Free Agents')) {
      inFreeAgentsSection = true
      continue
    }
    if (inFreeAgentsSection && line.startsWith('- ')) {
      freeAgents.push(line.replace('- ', ''))
    }
  }

  return freeAgents
}

export default function FreeAgents() {
  let freeAgents: string[] = []

  try {
    const filePath = path.join(process.cwd(), 'teams.md')
    const fileContents = fs.readFileSync(filePath, 'utf8')
    freeAgents = parseFreeAgents(fileContents)
  } catch (error) {
    console.error('Error reading teams.md:', error)
  }

  return (
    <div className="section">
      <h2 className="section-heading">FREE AGENTS</h2>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <p style={{ textAlign: 'center', color: '#ae000f', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
          Free agents will be claimed via a proprietary agentic algorithm (or "dibs"). Team assignments updated daily.
        </p>
        <div style={{ display: 'grid', gap: '1rem' }}>
          {freeAgents.map((agent, index) => (
            <div key={index} style={{
              background: '#f8f8f8',
              padding: '1rem',
              borderRadius: '8px',
              borderLeft: '4px solid #ae000f',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span style={{ color: '#001f3f', fontSize: '1.1rem', fontWeight: 'bold' }}>
                {agent}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
