//O(n) - t & O(n) - s

/* const waterArea = heights => {
  const maxes = new Array(heights.length).fill(0)
  let leftMax = 0
  for (let i = 0; i < heights.length; i++) {
    const height = heights[i]
    maxes[i] = leftMax
    leftMax = Math.max(leftMax, height)
  }

  let rightMax = 0
  for (let i = heights.length - 1; i >= 0; i--) {
    const height = heights[i]
    const minHeight = Math.min(rightMax, maxes[i])
    if (height < minHeight) {
      maxes[i] = minHeight - height
    } else {
      maxes[i] = 0
    }
    rightMax = Math.max(rightMax, height)
  }
  return maxes.reduce((a, b) => a + b, 0)
} */
//O(n) - t & O(1) - s

const waterArea = heights => {
  if (heights.length === 0) return 0

  let leftIdx = 0
  let rightIdx = heights.length - 1
  let leftMax = heights[leftIdx]
  let rightMax = heights[rightIdx]
  let surfaceArea = 0

  while (leftIdx < rightIdx) {
    if (heights[leftIdx] < heights[rightIdx]) {
      leftIdx++
      leftMax = Math.max(leftMax, heights[leftIdx])
      surfaceArea += leftMax - heights[leftIdx]
    } else {
      rightIdx--
      rightMax = Math.max(rightMax, heights[rightIdx])
      surfaceArea += rightMax - heights[rightIdx]
    }
  }
  return surfaceArea
}

console.log(waterArea([0, 8, 0, 0, 5, 0, 0, 10, 0, 0, 1, 1, 0, 3]))
