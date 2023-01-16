// Cours 8 de Codecademy
console.log("exo-6");

var joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: false,
    bathrooms: 1 + 2,
    cars: ['Clio', 'Van'],
};
// ! Ne faites pas de modification au dessus de cette ligne !

// 1. Afficher le nombre de voitures de Joe
console.log(joeInfo.cars.length);
// 2. Changer le nombre de salles de bains de Joe : il n'en possède qu'une. Afficher le nouveau nombre de salles de bain.
joeInfo.bathrooms = 1;
console.log(joeInfo.bathrooms);
// 3. Joe vient d'acquérir un garage. Afficher cette nouvelle information. 
joeInfo.garage = true;
console.log(joeInfo.garage);

const team = {
    players: [
        {
            firstName: 'John',
            lastName: 'Doe',
            age: 30,
        },
        {
            firstName: 'Jane',
            lastName: 'Doe',
            age: 28,
        },
        {
            firstName: 'Mary',
            lastName: 'Doe',
            age: 24,
        },
        {
            firstName: 'Eugene',
            lastName: 'Doe',
            age: 74,
        }
    ],
    games: [
        {
            opponent: 'Team 1',
            teamPoints: 42,
            opponentPoints: 12,
        },
        {
            opponent: 'Team 2',
            teamPoints: 12,
            opponentPoints: 6,
        },
        {
            opponent: 'Team 3',
            teamPoints: 70,
            opponentPoints: 28,
        },
        {
            opponent: 'Team 4',
            teamPoints: 64,
            opponentPoints: 26,
        },
    ],
}

function addPlayers (fName, lName, Age){
    firstName = fName;
    lastName = lName;
    age = Age;
    return {
        firstName,
        lastName,
        age,
    }
}

addPlayers ('Rick', 'Asley', '43');
addPlayers ('Jack', 'Rayan', '37');

function addGames(addOpponent, addTeamPoints, addOpponentPoints) {
    opponent = addOpponent;
    teamPoints = addTeamPoints;
    opponentPoints = addOpponentPoints;


}

addGames('Team 4', 80, 38);
addGames('Team 5', 100, 50);

let res1 = 0;

for (let key in team.games){
    res1 += team.games[key].teamPoints;
};
console.log(res1);

let res2 = 0;

for (let key in team.games){
    res2 += team.games[key].opponentPoints;
};
console.log(res2);

let res3 = 0;

for (let key in team.players){
    if (team.players[key].age > res3){
        res3 = team.players[key].age;
    }
};

console.log(res3);