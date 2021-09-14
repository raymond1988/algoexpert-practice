let array = [1, 5, 10, 25]
let n = 5 //2
 
function numberOfWaysToMakeChange (n, denoms) {
    let ways = new Array(n + 1).fill(0)
    ways[0] = 1
    for (let denom of denoms) {
        for(let amount = 1; amount < n + 1; amount++){
            if(denom <= amount){
                ways[amount] += ways[amount - denom]
            }
        }
    } 
    return ways[n]
}


console.log(numberOfWaysToMakeChange(n, array))
