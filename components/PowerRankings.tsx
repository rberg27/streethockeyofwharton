export default function PowerRankings() {
  const rankings = [
    {
      rank: 1,
      team: "Puck Dynasty",
      change: "up",
      changeValue: "+2",
      reason: "Dominant performance in recent scrimmages, excellent teamwork"
    },
    {
      rank: 2,
      team: "The Crushers",
      change: "down",
      changeValue: "-1",
      reason: "Lost key player to injury, struggling with defense"
    },
    {
      rank: 3,
      team: "Net Warriors",
      change: "up",
      changeValue: "+1",
      reason: "Strong offensive showing, improved coordination"
    },
    {
      rank: 4,
      team: "Goal Diggers",
      change: "same",
      changeValue: "±0",
      reason: "Consistent performance, solid all-around play"
    },
    {
      rank: 5,
      team: "Ice Breakers",
      change: "down",
      changeValue: "-2",
      reason: "Attendance issues affecting team chemistry"
    },
    {
      rank: 6,
      team: "Stick Handlers",
      change: "same",
      changeValue: "±0",
      reason: "Working on fundamentals, showing gradual improvement"
    }
  ]

  const getChangeClass = (change: string) => {
    switch (change) {
      case 'up':
        return 'rank-change up'
      case 'down':
        return 'rank-change down'
      default:
        return 'rank-change same'
    }
  }

  return (
    <div className="section power-rankings">
      <h2>Power Rankings</h2>
      <div style={{ overflowX: 'auto' }}>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Team</th>
              <th>Change</th>
              <th>Reason</th>
            </tr>
          </thead>
          <tbody>
            {rankings.map((team) => (
              <tr key={team.rank}>
                <td style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#f4d03f' }}>
                  #{team.rank}
                </td>
                <td style={{ fontWeight: 'bold' }}>{team.team}</td>
                <td>
                  <span className={getChangeClass(team.change)}>
                    {team.changeValue}
                  </span>
                </td>
                <td style={{ fontSize: '0.9rem', color: '#ccc' }}>
                  {team.reason}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}