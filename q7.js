function getUniqueStrings(strings) {
    const uniqueStrings = [];
    for (let i = 0; i < strings.length; i++) {
      if (!uniqueStrings.includes(strings[i])) {
        uniqueStrings.push(strings[i]);
      }
    }
    return uniqueStrings;
  }
  const strings = ["apple", "orange", "banana", "apple", "orange", "pear"];
const uniqueStrings = getUniqueStrings(strings);
console.log(uniqueStrings); 
