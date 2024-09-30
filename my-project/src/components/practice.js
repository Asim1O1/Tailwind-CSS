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

  const newItem = items.filter((item) => item.gender === "f");

  console.log("The item is", newItem);
