const numbers = [1,2,3,4,5,6];

function filterEvenNumbers(){
    const even = numbers.filter((num) => num % 2 === 0)
    return even;    
}

console.log(filterEvenNumbers());
