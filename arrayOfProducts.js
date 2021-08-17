let array = [5, 1, 4, 2]
//going left
//1,5,20
/* function arrayOfProducts (array) {
  let products = []
  for (let i = 0; i < array.length; i++) {
    let runningProduct = 1
    for (let j = 0; j < array.length; j++) {
      if (i !== j) {
        runningProduct *= array[j]
      }
    }
    products[i] = runningProduct
  }
  return products
} */

function arrayOfProducts(array) {
    let products = new Array(array.length).fill(1)
    let leftProducts = new Array(array.length).fill(1)
    let rightProducts = new Array(array.length).fill(1)

    let leftRunningProduct = 1
    for (let i = 0; i < array.length; i++) {
        leftProducts[i] = leftRunningProduct
        leftRunningProduct *= array[i]
    }

    let rightRunningProduct = 1
    for (let j = array.length - 1; j >= 0; j--) {
        rightProducts[j] = rightRunningProduct
        rightRunningProduct *= array[j]
    }

    for (let k = 0; k < array.length; k++) {
        products[k] = leftProducts[k] * rightProducts[k]
        
    }

    return products
}

console.log(arrayOfProducts(array))
