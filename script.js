'use strict'

//.......................Data base
const prersonalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,

    start: function () {
        prersonalMovieDB.count = +prompt('Cкільки фільмів ви вже подивились', '');

        while (prersonalMovieDB.count == '' || prersonalMovieDB.count == null || isNaN(prersonalMovieDB.count)) {
            prersonalMovieDB.count = +prompt('Cкільки фільмів ви вже подивились', '');
        }
    },

    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один із останніх переглянутих фільмів?', ''),
                b = prompt('Яка ваша оцінка йому?', '');

            if (a && b && a.length < 50 && b.length < 50) {
                prersonalMovieDB.movies[a] = b;
            } else {
                console.log('помилка!');
                i--;
            }
        }
    },

    detectPersonalLevel: function () {
        if (prersonalMovieDB.count < 10) {
            console.log('Замало пидивились(');
        } else if (prersonalMovieDB.count >= 10 && prersonalMovieDB.count < 30) {
            console.log('Ви класичний глядач)');
        } else if (prersonalMovieDB.count > 30) {
            console.log('Ви кіноман)');
        } else {
            console.log('ПОМИЛКА!(((');
        }
    },

    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(prersonalMovieDB);
        }
    },

    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            // const genre = prompt (`Ваш улюблений жанр під номером ${i}`);
            // prersonalMovieDB.genres[i - 1] = genre;
            prersonalMovieDB.genres[i - 1] = prompt(`Ваш улюблений жанр під номером ${i}`);
        }
    },

    allMethods: function () {
        prersonalMovieDB.start();
        prersonalMovieDB.rememberMyFilms();
        prersonalMovieDB.detectPersonalLevel();
        prersonalMovieDB.writeYourGenres();
        prersonalMovieDB.showMyDB(prersonalMovieDB.hidden);
    }
};

prersonalMovieDB.allMethods()
