'use client'

import { useEffect, useState } from 'react'

interface TeamData {
  count: number
  members: string[]
}

const TEAMS = ['The Goat', 'Lucy\'s', 'Ladders', 'Bonner\'s']

export default function TeamSignupCount() {
  const [teamData, setTeamData] = useState<Record<string, TeamData>>({})
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    try {
      const res = await fetch('/api/signup')
      if (res.ok) {
        const data = await res.json()
        setTeamData(data)
      }
    } catch (err) {
      console.error('Failed to fetch signups:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
    const interval = setInterval(fetchData, 10000)
    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <div className="section">
        <h2 className="section-heading">SALES LEADERBOARD</h2>
        <div style={{ textAlign: 'center', color: '#666' }}>Loading...</div>
      </div>
    )
  }

  const sortedTeams = TEAMS
    .map(team => ({ name: team, ...teamData[team] || { count: 0, members: [] } }))
    .sort((a, b) => b.count - a.count)

  return (
    <div className="section">
      <h2 className="section-heading">SALES LEADERBOARD</h2>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        {sortedTeams.map((team, index) => {
          const rank = index + 1

          return (
            <div
              key={team.name}
              style={{
                padding: '1rem 1.5rem',
                marginBottom: '0.75rem',
                borderRadius: '8px',
                background: '#f8f8f8',
                borderLeft: '4px solid #ae000f'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
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
                  {team.count}
                  <span style={{ fontSize: '0.9rem', fontWeight: 'normal', color: '#666', marginLeft: '0.25rem' }}>
                    {team.count === 1 ? 'recruit' : 'recruits'}
                  </span>
                </div>
              </div>

              {team.members.length > 0 && (
                <div style={{
                  marginTop: '0.75rem',
                  paddingTop: '0.75rem',
                  borderTop: '1px solid rgba(0,0,0,0.1)',
                  fontSize: '0.9rem',
                  color: '#666'
                }}>
                  {team.members.join(', ')}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
