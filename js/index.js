// let num = 10;
// while (num < 15){
//     console.log(num);
//     num++;
// }

// let i;
// for (i = 5; i < 30; i++){
//     console.log(i);
// }

// let sum = +prompt('Age', '');
// if (sum ==  18){
//     alert('привет');
// }
// else if (sum == 80){
//     alert("WoW");
// }
// else if (sum == 16){
//     alert('go away faggot');
// }
// else {alert('error');
// }

// let cum = +prompt('Name', '') ? ('User') : alert('Hello User') ? ('Boss') : alert('Gutten Tad Mister');
// let planet = ('saturnus');
// console.log(`my favorite place in univercity is ${planet}`);

// let enter = prompt('кто там?', '');
// if (enter == null){
//     alert('Отменено!');
// }
// if (enter == '' || null){
//     alert('Я вас не знаю!');
// }
// if (enter == 'админ'){
//     let pass = prompt('Пароль', '');
//     if (pass == null){
//         alert('Отменено!');
//     }
//     if (pass == '' || null){
//         alert('Я вас не Знаю!');
//     }
//     if (pass == 'я главный'){
//         alert('Здравствуйте!');
//     }
// }


// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   }


// function plus(num1, num2){
//     console.log(num1 + num2);
// }
// plus(6,4);


// function checkAge(age){
//     if (age > 18){
//         return true;
//     }
//     else{
//         alert("а родители разрешили?");
//     }
// }

// let age = prompt('сколько вам лет?', '18');
// if (checkAge(age)){
//     alert("доступ разршен");
// }
// else {
//     alert('доступ запрещен');
// }


// let numberOfFilms = +prompt('сколько фильмов вы уже посмотели?', '');
// let personalMovieDB = {
//     count:{numberOfFilms},
//     movies:{},
//     actors:{},
//     genres:[],
//     privat: false
// };
// let a = prompt('один из просмотренных фильмов', '');
// let b = prompt('на сколько оцените его?', '');
// let c = prompt('один из просмотренных фильмов', '');
// let d = prompt('на сколько оцените его?', '');

// personalMovieDB.movies = [a] = b;
// personalMovieDB.movies = [c] = d;
// console.log(personalMovieDB);


// for (let i = 1; i < 10; i++){
//     if (i === 8){
//         break;
//     }
//     else if (i === 9){
//         continue;
//     }
//     console.log(i);
// }

let numberOfFilms = +prompt('сколько фильмов вы уже посмотели?', '');
let personalMovieDB = {
    count:{numberOfFilms},
    movies:{},
    actors:{},
    genres:[],
    privat: false
};

for (let i = 0; i < 2; i++){
    let a = prompt('один из просмотренных фильмов', '');
    let b = prompt('на сколько оцените его?', '');

    if (a != null && b != null && a!= '' && b != '' && a.length < 50 && b.length < 50){
        personalMovieDB.movies = [a] = b;
        console.log(personalMovieDB);
    } else{
      i--;
    }

    
    }
if (personalMovieDB.count < 10){
    alert('просмтрено мало фильмов');
} 
else if (personalMovieDB.count > 30){
    alert('вы киноман');
}
else if (personalMovieDB.count < 10 && personalMovieDB.count > 30){
    alert('вы класический зритель');
}
else {
    alert('произошла ошибка');
}


console.log(personalMovieDB);
