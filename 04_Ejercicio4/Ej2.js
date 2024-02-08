//* 1.2 Cambia el primer elemento de avengers a "IRONMAN"
//* const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

const heros = ['HULK', 'SPIDERMAN', 'BLACK PANTHER']

for (let i = 0; i < heros.length; i++) {
  const hero = heros[i]
  console.log(heros[i])
}

heros[0] = 'IRONMAN'
console.log(heros)
