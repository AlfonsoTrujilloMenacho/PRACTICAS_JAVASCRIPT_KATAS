//* Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas. Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante.

const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple']
const foodSchedule = [
  { name: 'Heura', isVegan: true },
  { name: 'Salmon', isVegan: false },
  { name: 'Tofu', isVegan: true },
  { name: 'Burger', isVegan: false },
  { name: 'Rice', isVegan: true },
  { name: 'Pasta', isVegan: true }
]

let usedFruits = []
for (let i = 0; i < foodSchedule.length; i++) {
  const food = foodSchedule[i]
  if (foodSchedule[i].isVegan === false) {
    for (let j = 0; j < fruits.length; j++) {
      const fruta = fruits[j]
      if (!usedFruits.includes(fruits[i])) {
        foodSchedule[i].name = fruits[i]
        usedFruits.push(fruits[i])
      }
    }
    if ((foodSchedule[i].name = fruits[i])) {
      foodSchedule[i].isVegan = true
    }
  }
}
console.log(foodSchedule)
