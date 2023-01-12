// you can write js here
console.log('exo-2');
const myDate = new Date();

let week = "Nous sommes en semaine !"
let weekend = "Nous sommes en week-end !"
let isTesting = true; // mode test (false by default)

let day;
let hour;

if (isTesting) {
    day = parseInt(prompt('Choisissez un index de jour:'));
    hour = parseInt(prompt('Choisissez une heure:'));
} else {
    day = myDate.getUTCDay();
    hour = myDate.getHours();
}

if (((day === 5)&&(hour >= 17))||((day === 1)&&(hour >= 9))){
    console.log(weekend);
} else {
    console.log(week);
}