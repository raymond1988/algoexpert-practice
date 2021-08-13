let competitions = [
  ['HTML', 'C#'],
  ['C#', 'Python'],
  ['Python', 'HTML']
]

let results = [0, 0, 1]

let tournamentWinner = (competitions, results) => {
  let currentTopRank = ''
  let winningTeam = ''
  let map = { currentTopRank: 0 }
  for (let i = 0; i <= results.length - 1; i++) {
    if (results[i] == 0) {
      winningTeam = competitions[i][1]
      map[winningTeam] = map[winningTeam] ? map[winningTeam] + 3 : 3
    } else {
      winningTeam = competitions[i][0]
      map[winningTeam] = map[winningTeam] ? map[winningTeam] + 3 : 3
    }

    //update top competitor
    if (map[winningTeam] > map[currentTopRank]) {
      currentTopRank = winningTeam
    }
  }
  return map, currentTopRank
}

console.log(tournamentWinner(competitions, results))
