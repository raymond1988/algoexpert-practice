const firstNonRepeatingCharacter = (string) => {
    const map = {}
    for (const char of string) {
        map[char] =  map[char] ? map[char] += 1 : 1
    }
    for (let index = 0; index < string.length; index++) {
        const char = string[index];
        if(map[char] === 1) return index
    }
    return -1
}

console.log(firstNonRepeatingCharacter("abcdcaf"));