// console.log(a)
// console.log(b); //
// var b = a = 12;

// var c = []
// var d = []

// console.log(c ==d)
// console.log(c ===d)

const items = [
  {
    name: "p1",
    age: 20,
    gender: "m",
  },
  {
    name: "p2",
    age: 21,
    gender: "f",
  },
  {
    name: "p3",
    age: 22,
    gender: "m",
  },
];
const newArray = Object.entries(items).map(([key, value])=> {
    return {key, value}
});
console.log("The new Array is", newArray)

const newItem = items.filter((item) => item.gender === "f");

console.log("The item is", newItem);

console.log(NaN == NaN); // undefined
console.log("1" == 1)
console.log("abc" / 2);


// function currying

function Simplify(a)
{
    return function(b)
    {
        return function(c)
        {
                return a * b + c;
        }
    }
}

const check = Simplify(5);
const check1 = check(2)
console.log(check1(3))


// array check

const array1 = [1. ,2, 3, 4, 5, 6, 7, 8, 9, 10]

const checkArray = Array.isArray(array1)
console.log(checkArray)