let reqs = ['gym', 'school', 'store']
let blocks = [
  { gym: false, school: true, store: false },
  { gym: true, school: false, store: false },
  { gym: true, school: true, store: false },
  { gym: false, school: true, store: false },
  { gym: false, school: true, store: true }
]
/* function apartmentHunting(blocks, reqs) {
  // Write your code here.
  const maxDistancesAtBlocks = new Array(blocks.length).fill(-Infinity);

  for (let i = 0; i < blocks.length; i++) {
      for (const req of reqs) {
          let closestReqDistance = Infinity;
          for (let j = 0; j < blocks.length; j++) {
              if(blocks[i][req]){
                  closestReqDistance = Math.min(closestReqDistance, distanceBetween(i, j));
              }
          }
          maxDistancesAtBlocks[i] = Math.max(maxDistancesAtBlocks[i], closestReqDistance)
      }
  }
  return getIdxAtMinValue(maxDistancesAtBlocks);
}

function getIdxAtMinValue(array){
    let minValue = Infinity;
    let idxAtMinValue = 0;

    for (let index = 0; index < array.length; index++) {
        const currentVal = array[index];
        if(currentVal < minValue){
            minValue = currentVal
            idxAtMinValue = index
        }
    }
    return idxAtMinValue;
}

function distanceBetween(a, b){
    return Math.abs(a - b);
} */

function apartmentHunting (blocks, reqs) {
  const minDistancesFromBlocks = reqs.map(req=>getMinDistances(blocks,req))
  const maxDistancesAtBlocks = getMaxDistancesAtBlocks(blocks, minDistancesFromBlocks)
  return getIdxAtMinValue(maxDistancesAtBlocks)
}

function getMinDistances(blocks, reqs){
    let minDistances = new Array(blocks.length);
    let closestIdx = Infinity;
    //loop from left to right
    for (let i = 0; i < blocks.length; i++) {
        if(blocks[i][reqs]) closestIdx = i;
        minDistances[i] = distancesBetween(i, closestIdx)
    }

    //loop from right to left
    for (let j = blocks.length-1; j >= 0; j--) {
        if(blocks[j][reqs]) closestIdx = j
        minDistances[j] = Math.min(minDistances[j], distancesBetween(j, closestIdx))
    }
    return minDistances
}

function getMaxDistancesAtBlocks(blocks, minDistancesFromBlocks){
    const maxDistancesAtBlocks = new Array(blocks.length);
    for (let i = 0; i < blocks.length; i++) {
        const minDistancesAtBlocks = minDistancesFromBlocks.map(distances => distances[i])
        maxDistancesAtBlocks[i] = Math.max(...minDistancesAtBlocks)
    }
    return maxDistancesAtBlocks

}

function getIdxAtMinValue(maxDistancesAtBlocks){
    let idxAtMinValue = 0;
    let minValue = Infinity;
    for (let i = 0; i < maxDistancesAtBlocks.length; i++) {
        const currentValue = maxDistancesAtBlocks[i];
        if(currentValue < maxDistancesAtBlocks[i]){
            minValue = currentValue;
            idxAtMinValue = 1;
        }
        
    }
    return idxAtMinValue
}

function distancesBetween(a, b){
    return Math.abs(a-b);
}

console.log(apartmentHunting(blocks, reqs))
