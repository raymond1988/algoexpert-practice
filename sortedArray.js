let arr = [-8, 1, 2, 3, 10]

let sortedArraySrd = arr => {
  let sortedArr = new Array(arr.length)
  let sPtr = 0
  let lPrt = arr.length - 1

  for (let i = arr.length - 1; i >= 0; i--) {
    //get the current small and large values
    let smallerValue = Math.abs(arr[sPtr])
    let largerValue = Math.abs(arr[lPrt])

    //if the absolute value of smaller is bigger
    if (smallerValue > largerValue) {
      sortedArr[i] = smallerValue * smallerValue
      sPtr++
    } else {
      sortedArr[i] = largerValue * largerValue
      lPrt--
    }
  }

  return sortedArr
}

console.log(sortedArraySrd(arr))
