'use client'

import { useState } from 'react'

const TEAMS = [
  'The Goat',
  'Lucy\'s',
  'Ladders',
  'Bonner\'s'
]

const GRAD_SCHOOLS = [
  'Wharton',
  'Engineering',
  'Law',
  'Medicine',
  'Nursing',
  'Education',
  'Design',
  'Social Policy & Practice',
  'Annenberg',
  'Dental',
  'Veterinary',
  'Other'
]

export default function SignupForm({ onSignup }: { onSignup?: () => void }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [team, setTeam] = useState('')
  const [gradSchool, setGradSchool] = useState('')
  const [recruitedBy, setRecruitedBy] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, team, grad_school: gradSchool, recruited_by: recruitedBy || null })
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Failed to sign up')
      }

      setStatus('success')
      setName('')
      setEmail('')
      setTeam('')
      setGradSchool('')
      setRecruitedBy('')
      onSignup?.()
    } catch (err) {
      setStatus('error')
      setErrorMessage(err instanceof Error ? err.message : 'Failed to sign up')
    }
  }

  return (
    <div className="section">
      <h2 className="section-heading">JOIN A TEAM</h2>
      <div style={{ maxWidth: '500px', margin: '0 auto' }}>
        {status === 'success' ? (
          <div style={{
            background: '#d4edda',
            color: '#155724',
            padding: '1rem',
            borderRadius: '8px',
            textAlign: 'center',
            marginBottom: '1rem'
          }}>
            You're in! Welcome to the team.
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', color: '#001f3f', fontWeight: 'bold' }}>
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '4px',
                  border: '2px solid #001f3f',
                  fontSize: '1rem',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <div>
              <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', color: '#001f3f', fontWeight: 'bold' }}>
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '4px',
                  border: '2px solid #001f3f',
                  fontSize: '1rem',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <div>
              <label htmlFor="team" style={{ display: 'block', marginBottom: '0.5rem', color: '#001f3f', fontWeight: 'bold' }}>
                Team
              </label>
              <select
                id="team"
                value={team}
                onChange={(e) => setTeam(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '4px',
                  border: '2px solid #001f3f',
                  fontSize: '1rem',
                  background: 'white',
                  boxSizing: 'border-box'
                }}
              >
                <option value="">Select a team...</option>
                {TEAMS.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="gradSchool" style={{ display: 'block', marginBottom: '0.5rem', color: '#001f3f', fontWeight: 'bold' }}>
                Grad School
              </label>
              <select
                id="gradSchool"
                value={gradSchool}
                onChange={(e) => setGradSchool(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '4px',
                  border: '2px solid #001f3f',
                  fontSize: '1rem',
                  background: 'white',
                  boxSizing: 'border-box'
                }}
              >
                <option value="">Select your school...</option>
                {GRAD_SCHOOLS.map((school) => (
                  <option key={school} value={school}>{school}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="recruitedBy" style={{ display: 'block', marginBottom: '0.5rem', color: '#001f3f', fontWeight: 'bold' }}>
                Who recruited you? <span style={{ fontWeight: 'normal', color: '#666' }}>(optional)</span>
              </label>
              <input
                type="text"
                id="recruitedBy"
                value={recruitedBy}
                onChange={(e) => setRecruitedBy(e.target.value)}
                placeholder="Enter their name"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '4px',
                  border: '2px solid #001f3f',
                  fontSize: '1rem',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            {status === 'error' && (
              <div style={{
                background: '#f8d7da',
                color: '#721c24',
                padding: '0.75rem',
                borderRadius: '4px'
              }}>
                {errorMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              style={{
                background: '#ae000f',
                color: 'white',
                padding: '1rem',
                borderRadius: '4px',
                border: 'none',
                fontSize: '1rem',
                fontWeight: 'bold',
                cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                opacity: status === 'loading' ? 0.7 : 1
              }}
            >
              {status === 'loading' ? 'Joining...' : 'Join Team'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
