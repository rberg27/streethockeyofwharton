export default function PowerRankings() {
  const rankings = [
    {
      rank: 1,
      team: "Team 2",
      change: "same",
      changeValue: "±0",
      reason: "First Free Agent signing of Joel Revo - by definition best in league history"
    },
    {
      rank: 2,
      team: "Team 1",
      change: "same",
      changeValue: "±0",
      reason: "2nd in the rankings like how HCM is the 2nd best cohort at Wharton"
    },
    {
      rank: 3,
      team: "Team 3",
      change: "same",
      changeValue: "±0",
      reason: "Herman is Canadian - counts for something"
    },
    {
      rank: 4,
      team: "Team 4",
      change: "same",
      changeValue: "±0",
      reason: "Stephen Kennefik is a wild card - still unknown if Capt Shruthi can keep him on track"
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