/* const validStartingCity = (distances, fuel, mpg) => {
  const numberOfCities = distances.length

  for (let startCityIdx = 0; startCityIdx < numberOfCities; startCityIdx++) {
    let milesRemaining = 0

    for (
      let currentCityIdx = startCityIdx;
      currentCityIdx < startCityIdx + numberOfCities;
      currentCityIdx++
    ) {
      if (milesRemaining < 0) continue
      const currentCityIdxRotated = currentCityIdx % numberOfCities

      const fuelFromCurrerntCity = fuel[currentCityIdxRotated]
      const distanceToNextCity = distances[currentCityIdxRotated]
      milesRemaining += fuelFromCurrerntCity * mpg - distanceToNextCity
    }
    if (milesRemaining >= 0) return startCityIdx
  }
  return -1
} */

const validStartingCity = (distances, fuel, mpg) => {
  const numberOfCities = distances.length
  let milesRemaining = 0

  let indexOfStartingCityCandidate = 0
  let milesRemainingAtStartingCityCandidate = 0

  for (let cityIdx = 1; cityIdx < numberOfCities; cityIdx++) {
    const distanceFromPreviousCity = distances[cityIdx - 1]
    const fuelFromPreviousCity = fuel[cityIdx - 1]
    milesRemaining += fuelFromPreviousCity * mpg - distanceFromPreviousCity

    if (milesRemaining < milesRemainingAtStartingCityCandidate) {
      milesRemainingAtStartingCityCandidate = milesRemaining
      indexOfStartingCityCandidate = cityIdx
    }
  }
  return indexOfStartingCityCandidate
}

console.log(validStartingCity())
