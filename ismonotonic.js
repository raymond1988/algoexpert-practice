let array = [-1, -5, -10, -1100, -900, -1101, -1102, -9001]

    function isMonotonic(array) {
  // Write your code here.
	let isnonDecreasing = true
	let isNotIncreasing = true
	
	for(let i = 1; i < array.length; i++){
		if(array[i] < array[i - 1]){
			isnonDecreasing = false
		}
		if(array[i] > array[i - 1]){
			isNotIncreasing = false
		}
	}
    
	return(isnonDecreasing ? isnonDecreasing :  isNotIncreasing)

}

console.log(isMonotonic(array));