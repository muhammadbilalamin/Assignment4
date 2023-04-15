let stg = "the rising coders"
function numberOfVowels(stg) {
    let reg = /[aeiou]/gi
    let matches = stg.match(reg)
    return matches ? matches.length : 0
    
}
console.log(numberOfVowels(stg))