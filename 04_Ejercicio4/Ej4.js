//* 1.4 Añade 2 elementos al array: "Morty" y "Summer".
//* Muestra en consola el último personaje del array
//* const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];

const rickAndMortyCharacters = ['Rick', 'Beth', 'Jerry']

rickAndMortyCharacters.push('Morty', 'Summer')

let lastCharacter = rickAndMortyCharacters[rickAndMortyCharacters.length - 1]
console.log(lastCharacter)
