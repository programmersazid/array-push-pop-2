const numbers = [2, 4, 6];
console.log(numbers);
numbers.push(1,3,5);
numbers.push(8);
numbers.push('sazid');
console.log(numbers);
// push holo add kore array te ar pop holo array theke element remove kore r pop hoi last theke remove kore
numbers.pop();
// variable niye tar moddheo pop kore kono element store korte pari amra
// push korle last er theke add hoi

console.log(numbers);
const out1 = numbers.pop();
const out2 = numbers.pop();
console.log(out1,out2);
// first element ber korbo akhon
numbers.shift();
console.log(numbers);

// first element add korbo akhon
numbers.unshift(2);
console.log(numbers);
numbers[0] = 0;
console.log(numbers)