// you can write js here
console.log('exo-2');
const myDate = new Date();

let date = myDate.getUTCDay(); // récupère la date du PC et la stock dans une variable "Date"
let hours = myDate.getHours(); // récupère et stock l'heure.
let week = (((date <= 5)&&(hours >= 17))||((date >= 1)&&(hours >= 9))); // vérifie si le jour se situe entre lundi et vendredi
let weekEnd = ((date === 6)||(date === 0)); // vérifie si le jour se situe entre samedi et dimanche
let weekEndStart = ((date === 5)&&(hours === 17)); // vérifie si nous sommes le vendredi 17H (début du week-end)
let stillInWeekEnd = ((date === 1)&&(hours === 9)); // vérifie si nous sommes le lundi 9H (début du week-end)
let isTesting = true; // active le mode test

console.log(myDate);
console.log(date);
console.log(week);
console.log(weekEnd);
console.log(weekEndStart);

function weekOrWeekend (week, weekEnd, weekEndStart, stillInWeekEnd) {
    if (week) {
        console.log('Nous sommes en semaine !');
    } else if (weekEndStart){
        console.log('Le week-end débute !');
    } else if (stillInWeekEnd){
        console.log('Nous arrivons au bout du week-end !')
    } else if (weekEnd) {
        console.log('Nous sommes en week-end !');
    } else {
        console.log('Erreur de processus !');
    }
}

function isTestingFunction (isTesting) {
    if (isTesting) {
        date = prompt('Phase de Test - Entrée une date (YYYY-MM-DD HH:MM:SS GMT+1)');
        weekOrWeekend(week,weekEnd, weekEndStart, stillInWeekEnd);
    } else {
        console.log('Phase automatisée !');
    }
}

isTestingFunction(isTesting);
