//* Usa un bucle para crear 3 arrays de peliculas filtrados por categorias. Pelicula pequeña, menos de 100 minutos, pelicula mediana, mas de 100 minutos y menos de 200 y pelicula grande, mas de 200 minutos. Imprime cada array en por consola.

let shortMovie = []
let mediumMovie = []
let longMovie = []

const movies = [
  { name: 'Titan A.E.', durationInMinutes: 90 },
  { name: 'Nightmare before Christmas', durationInMinutes: 225 },
  { name: 'Inception', durationInMinutes: 165 },
  { name: 'The Lord of the Rings', durationInMinutes: 967 },
  { name: 'Star Wars: A New Hope', durationInMinutes: 214 },
  { name: 'Terminator', durationInMinutes: 140 }
]

for (let i = 0; i < movies.length; i++) {
  const movie = movies[i]
  if (movie.durationInMinutes < 100) {
    shortMovie.push(movie.name)
  } else if (movie.durationInMinutes >= 100 && movie.durationInMinutes < 200) {
    mediumMovie.push(movie.name)
  } else {
    longMovie.push(movie.name)
  }
}

console.log('Esto son películas cortas', shortMovie)
console.log('Esto son películas de duración media', mediumMovie)
console.log('Esto son películas largas', longMovie)
