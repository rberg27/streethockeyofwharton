import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

const VALID_TEAMS = [
  'The Goat',
  'Lucy\'s',
  'Ladders',
  'Bonner\'s'
]

export async function POST(request: Request) {
  try {
    const { name, email, team, grad_school, recruited_by } = await request.json()

    if (!name || !email || !team) {
      return NextResponse.json(
        { error: 'Name, email, and team are required' },
        { status: 400 }
      )
    }

    if (!VALID_TEAMS.includes(team)) {
      return NextResponse.json(
        { error: 'Invalid team' },
        { status: 400 }
      )
    }

    const { error } = await supabase
      .from('signups')
      .insert({ name, email, team, grad_school, recruited_by })

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Failed to sign up' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: 'Invalid request' },
      { status: 400 }
    )
  }
}

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('signups')
      .select('name, team')
      .order('created_at', { ascending: true })

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Failed to fetch signups' },
        { status: 500 }
      )
    }

    const teams: Record<string, { count: number; members: string[] }> = {}
    for (const team of VALID_TEAMS) {
      teams[team] = { count: 0, members: [] }
    }
    for (const row of data || []) {
      if (teams[row.team]) {
        teams[row.team].count++
        teams[row.team].members.push(row.name)
      }
    }

    return NextResponse.json(teams)
  } catch {
    return NextResponse.json(
      { error: 'Failed to fetch signups' },
      { status: 500 }
    )
  }
}
