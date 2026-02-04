export default function PowerRankings() {
  const rankings = [
    {
      rank: 1,
      team: "Lucy's Pub Street Hockey Club",
      change: "up",
      changeValue: "+1",
      reason: "Drinker's -> Lucy's is an upgrade."
    },
    {
      rank: 2,
      team: "The Goat Pub Street Hockey Club",
      change: "up",
      changeValue: "+2",
      reason: "League leader in recruits. As the recruits grow, so does their power."
    },
    {
      rank: 3,
      team: "Bonner's Pub Street Hockey Club",
      change: "down",
      changeValue: "-2",
      reason: " "
    },
    {
      rank: 4,
      team: "Ladders 15 Street Hockey Club",
      change: "down",
      changeValue: "-1",
      reason: "Still recovering from Game 7."
    },
    
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
      <h2 className="section-heading">POWER RANKINGS</h2>
      <div style={{ overflowX: 'auto' }}>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Team</th>
              <th>Change</th>
              <th>Analysis</th>
            </tr>
          </thead>
          <tbody>
            {rankings.map((team) => (
              <tr key={team.rank}>
                <td style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#ae000f' }}>
                  #{team.rank}
                </td>
                <td style={{ fontWeight: 'bold' }}>{team.team}</td>
                <td>
                  <span className={getChangeClass(team.change)}>
                    {team.changeValue}
                  </span>
                </td>
                <td style={{ fontSize: '0.9rem', color: '#666' }}>
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