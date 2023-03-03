'use strict'

let numberOfFilms;

function start () {
     numberOfFilms = +prompt('Cкільки фільмів ви вже подивились', '');

     while (numberOfFilms == '' || numberOfFilms == null || isNaN (numberOfFilms)) {
        numberOfFilms = +prompt('Cкільки фільмів ви вже подивились', '');
     }
}

start ();

//.......................Data base
const prersonalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// ....................right writing

function rememberMyFilms () {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один із останніх переглянутих фільмів?', ''),
            b = prompt('Яка ваша оцінка йому?', '');
    
        if (a !== '' && b !== '' && a !== null && b !== null && a.length < 50 && b.length !== 50) {
            prersonalMovieDB.movies[a] = b;
        } else {
            console.log('помилка!');
            i--
        }
    }
}

// rememberMyFilms ();


// ................kind of watcher

function detectPersonalLevel () {
    if (prersonalMovieDB.count < 10) {
        console.log('Замало пидивились(');
    } else if (prersonalMovieDB.count >= 10 && prersonalMovieDB.count < 30) {
        console.log('Ви класичний глядач)');
    } else if (prersonalMovieDB.count > 30) {
        console.log('Ви кіноман)');
    } else {
        console.log('ПОМИЛКА!(((');
    }
}

// detectPersonalLevel ();


//.....................Search Privat

function showMyDB (hidden) {
    if (!hidden) {
        console.log(prersonalMovieDB);
    }
    
}

showMyDB (prersonalMovieDB.privat);


// console.log(prersonalMovieDB);


//................................Genres

function writeYourGenres () {
    for (let i = 1; i <= 3; i++){
        // const genre = prompt (`Ваш улюблений жанр під номером ${i}`);
        // prersonalMovieDB.genres[i - 1] = genre;
        prersonalMovieDB.genres[i - 1] = prompt (`Ваш улюблений жанр під номером ${i}`);
    }
}
writeYourGenres ();