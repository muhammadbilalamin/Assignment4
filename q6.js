function getObjectValuesByKey(objects, key) {
    const values = [];
    for (let i = 0; i < objects.length; i++) {
      if (objects[i].hasOwnProperty(key)) {
        values.push(objects[i][key]);
      }
    }
    return values;
  }
  const persons = [
    { name: "Bilal", age: 22 },
    { name: "Abdullah", age: 25 },
    { name: "Hassan", occupation: "developer" }
  ];
  const values = getObjectValuesByKey(persons, "age");
  console.log(values); 
  