function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

let result = add(1, 2); // Correct usage
console.log(result); // 3

try {
  let result2 = add(1, '2'); // This will throw an error
  console.log(result2);
} catch (e) {
  console.error(e);
}

//Alternative solution: using type assertion
function add2(a: number, b: number): number {
  return a + b;
}
let result3 = add2(1, parseInt('2' as string)); //Type assertion ensures type safety
console.log(result3); //3