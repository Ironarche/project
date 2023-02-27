'use strict'

const numberOfFilms = +prompt('Cкільки фільмів ви вже подивились', '');

//.......................Data base
const prersonalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// ....................right writing
for (let i = 0; i < 2; i++) {
    const a = prompt('Один із останніх переглянутих фільмів?', ''),
        b = prompt('Яка ваша оцінка йому?', '');

    if (a !== '' && b !== '' && a!== null && b!== null && a.length < 50 && b.length !== 50){
        prersonalMovieDB.movies[a] = b;
    } else{
        console.log('помилка!');
        i--
    }  
}

// ................kind of watcher
if (prersonalMovieDB.count < 10){
    console.log('Замало пидивились(');
} else if (prersonalMovieDB.count >= 10 && prersonalMovieDB.count < 30) {
    console.log('Ви класичний глядач)');
} else if (prersonalMovieDB.count > 30) {
    console.log('Ви кіноман)');
} else {
    console.log('ПОМИЛКА!(((');
}
console.log(prersonalMovieDB);
