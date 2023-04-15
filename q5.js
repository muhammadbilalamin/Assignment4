function getKeys(obj) {
    let keys = Object.keys(obj);
    return keys;
  }
  
  let myObject = { name: "Ali", age: 23, city: "Karachi" };
  let output = getKeys(myObject);
  console.log(output);