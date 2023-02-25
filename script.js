const numberOfFilms = +prompt ('Cкільки фільмів ви вже подивились', '');

const prersonalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt ('Один із останніх переглянутих фільмів?', ''),
      b = prompt ('Яка ваша оцінка йому?', ''),
      с = prompt ('Один із останніх переглянутих фільмів?', ''),
      d = prompt ('Яка ваша оцінка йому?', '');

prersonalMovieDB.movies[a] = b;
prersonalMovieDB.movies[с] = d;

console.log(prersonalMovieDB);
