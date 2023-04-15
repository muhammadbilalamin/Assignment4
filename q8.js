function getProduct(numbers) {
    let product = 1;
    for (let i = 0; i < numbers.length; i++) {
      product *= numbers[i];
    }
    return product;
  }
  const numbers = [1, 2, 3, 4, 5];
  const product = getProduct(numbers);
  console.log(product); 
  