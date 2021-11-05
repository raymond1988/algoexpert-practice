const tandemBicycle = (redShirtSpeeds, blueShirtSpeeds, fastest) => {
  redShirtSpeeds.sort((a, b) => a - b)
  blueShirtSpeeds.sort((a, b) => a - b)

  if (!fastest) reverseArrayInPlace(redShirtSpeeds)

  let totalSpeed = 0
  for (let idx = 0; idx < redShirtSpeeds.length; idx++) {
    const redSpeed = redShirtSpeeds[idx] //small
    const currentBlue = blueShirtSpeeds.length - (idx + 1)
    const blueSpeed = blueShirtSpeeds[currentBlue]
    totalSpeed += Math.max(redSpeed, blueSpeed)
  }
  return totalSpeed
}

const reverseArrayInPlace = array => {
    let start = 0
    let end = array.length  - 1
    while (start < end) {
        const temp = array[start]
        array[start] = array[end]
        array[end] = temp
        start++
        end--
    }
}

console.log(tandemBicycle([5, 5, 3, 9, 2], [3, 6, 7, 2, 1], true))
