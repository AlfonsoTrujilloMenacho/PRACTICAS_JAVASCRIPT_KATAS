//* 1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
//* const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

const rickAndMortyCharacters = [
  'Rick',
  'Beth',
  'Jerry',
  'Morty',
  'Summer',
  'Lapiz Lopez'
]

let deletedCharacter = rickAndMortyCharacters.length - 1
rickAndMortyCharacters.splice(deletedCharacter)

console.log(rickAndMortyCharacters.length)
console.log(rickAndMortyCharacters[0], rickAndMortyCharacters[4])
