//write a function that takes in a sorted array of distinct integers and returns
//the first index in the array that is equal to the value at that index.

//O(n) t && O(n) s
const indexEqualsValue = (array) => {
  for (let index = 0; index < array.length; index++) {
      const element = array[index];
      if(index === element) return index
  }
  return -1
}

const indexEqualsValue = () => {
  
}