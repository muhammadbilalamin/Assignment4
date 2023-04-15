function average(numbers) {
    if (numbers.length === 0) {
      return 0;
    }
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    const avg = sum / numbers.length;
    return avg;
  }
  const numbers = [1, 2, 3, 4, 5];
  const avg = average(numbers);
  console.log(avg); 
    