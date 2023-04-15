function longestString(string) {
    let Length = 0;

    for (let i = 0; i < string.length; i++) {
      if (string[i].length > Length) {
        Length = string[i].length;
      }
    }

    return Length;
  }

  let strings = longestString(["apple", "banana", "pear", "grapefruit","mango","pineapple"]);
  console.log("Length of Longest string in array is "+strings);