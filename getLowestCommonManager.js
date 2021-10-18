const getLowestCommonManager = (topManager, reportOne, reportTwo) => {
  return getOrgInfo(topManager, reportOne, reportTwo).lowestCommonManager
}

const getOrgInfo = (manager, reportOne, reportTwo) => {
  let numImportantReports = 0
  for (const directReports of manager.directReports) {
    const orgInfo = getOrgInfo(directReports, reportOne, reportTwo)
    if (!!orgInfo.lowestCommonManager) return orgInfo
    numImportantReports += orgInfo.numImportantReports
  }
  if (manager === reportOne || manager === reportTwo) numImportantReports++
  const lowestCommonManager = numImportantReports === 2 ? manager : null
  return { lowestCommonManager, numImportantReports }
}

//

class OrgChart {
  constructor (name) {
    this.name = name
    this.directReports = [
      { directReports: ['B', 'C', 'D', 'E', 'F'], id: 'A', name: 'A' },
      { directReports: ['G', 'H', 'I'], id: 'B', name: 'B' },
      { directReports: ['J'], id: 'C', name: 'C' },
      { directReports: ['K', 'L'], id: 'D', name: 'D' },
      { directReports: [], id: 'E', name: 'E' },
      { directReports: ['M', 'N'], id: 'F', name: 'F' },
      { directReports: [], id: 'G', name: 'G' },
      { directReports: ['O', 'P', 'Q', 'R'], id: 'H', name: 'H' },
      { directReports: [], id: 'I', name: 'I' },
      { directReports: [], id: 'J', name: 'J' },
      { directReports: ['S'], id: 'K', name: 'K' },
      { directReports: [], id: 'L', name: 'L' },
      { directReports: [], id: 'M', name: 'M' },
      { directReports: [], id: 'N', name: 'N' },
      { directReports: [], id: 'O', name: 'O' },
      { directReports: ['T', 'U'], id: 'P', name: 'P' },
      { directReports: [], id: 'Q', name: 'Q' },
      { directReports: ['V'], id: 'R', name: 'R' },
      { directReports: [], id: 'S', name: 'S' },
      { directReports: [], id: 'T', name: 'T' },
      { directReports: [], id: 'U', name: 'U' },
      { directReports: ['W', 'X', 'Y'], id: 'V', name: 'V' },
      { directReports: [], id: 'W', name: 'W' },
      { directReports: ['Z'], id: 'X', name: 'X' },
      { directReports: [], id: 'Y', name: 'Y' },
      { directReports: [], id: 'Z', name: 'Z' }
    ]
  }
}

console.log(getLowestCommonManager('A', 'B', 'A'))
/* 
{
  "orgChart": {
    "nodes": [
      {"directReports": ["B", "C", "D", "E", "F"], "id": "A", "name": "A"},
      {"directReports": ["G", "H", "I"], "id": "B", "name": "B"},
      {"directReports": ["J"], "id": "C", "name": "C"},
      {"directReports": ["K", "L"], "id": "D", "name": "D"},
      {"directReports": [], "id": "E", "name": "E"},
      {"directReports": ["M", "N"], "id": "F", "name": "F"},
      {"directReports": [], "id": "G", "name": "G"},
      {"directReports": ["O", "P", "Q", "R"], "id": "H", "name": "H"},
      {"directReports": [], "id": "I", "name": "I"},
      {"directReports": [], "id": "J", "name": "J"},
      {"directReports": ["S"], "id": "K", "name": "K"},
      {"directReports": [], "id": "L", "name": "L"},
      {"directReports": [], "id": "M", "name": "M"},
      {"directReports": [], "id": "N", "name": "N"},
      {"directReports": [], "id": "O", "name": "O"},
      {"directReports": ["T", "U"], "id": "P", "name": "P"},
      {"directReports": [], "id": "Q", "name": "Q"},
      {"directReports": ["V"], "id": "R", "name": "R"},
      {"directReports": [], "id": "S", "name": "S"},
      {"directReports": [], "id": "T", "name": "T"},
      {"directReports": [], "id": "U", "name": "U"},
      {"directReports": ["W", "X", "Y"], "id": "V", "name": "V"},
      {"directReports": [], "id": "W", "name": "W"},
      {"directReports": ["Z"], "id": "X", "name": "X"},
      {"directReports": [], "id": "Y", "name": "Y"},
      {"directReports": [], "id": "Z", "name": "Z"}
    ]
  },
  "reportOne": "A",
  "reportTwo": "B",
  "topManager": "A"
} */
