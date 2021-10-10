// Soal nomor 1
const person = {
  name: "person A",
  age: 100,
  favDrinks: [
    "coffee",
    "jamu temulawak",
    "tea"
  ],
  greeting: function(nama) {
    console.log("Hello, " + nama);

  }
}

/// EDIT HERE

person.name = "Kevin";
person.favDrinks[1] = "Tap water";

/// STOP

console.log(person.name);
console.log(person.age);
console.log(person.favDrinks);
console.log(person.greeting(person.name));

//Soal nomor 2

function getObjectValue(obj, path) { 
    if (obj.path) {
      return true;
    }
    return false
}

const milkBasedCoffee = {
  name: "latte",
  ingredients: {
    espresso: {
      origin: "lampung",
      roastProfile: "medium to dark",
      ratio: 1
    },
    milk: {
      brand: "susu murni",
      isVegan: false,
      ratio: 5
    }
  },
}

const espresso = getObjectValue(milkBasedCoffee, "ingredients.espresso.origin");
const coffeeBrand = getObjectValue(milkBasedCoffee, "ingredients.espresso.brand");
const isMilkVegan = getObjectValue(milkBasedCoffee, "ingredients.milk.isVegan");

console.log(espresso);
console.log(coffeeBrand);
console.log(isMilkVegan)

