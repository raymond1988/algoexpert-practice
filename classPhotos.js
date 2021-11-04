const classPhotos = (redShirtHeights, blueShirtHeights) => {
  redShirtHeights.sort((a, b) => a - b)
  blueShirtHeights.sort((a, b) => a - b)

  const shirtColorInFirstRow =
    redShirtHeights[0] < blueShirtHeights[0] ? 'RED' : 'BLUE'

  for (let i = 0; i < redShirtHeights.length; i++) {
    const redShirtHeight = redShirtHeights[i]
    const blueShirtHeight = blueShirtHeights[i]

    if (shirtColorInFirstRow === 'RED') {
      if (redShirtHeight >= blueShirtHeight) return false
    } else if (blueShirtHeight >= redShirtHeight) return false
  }
  return true
}

console.log(classPhotos([5, 8, 1, 3, 4], [6, 9, 2, 4, 5]))
