// you can write js here

console.log('exo-4');

var secretMessage = ["Learning", "isn't", "about", "what", "you", "get",
 "easily", "the", "first", "time,", "it's", "about", "what", "you", "can",
  "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];

secretMessage.pop();//Step_1
console.log(secretMessage);

secretMessage.push('to','program');//Step_2
console.log(secretMessage);

secretMessage[6] = 'right'; //Step_3
console.log(secretMessage);

secretMessage.shift();//Step_4
console.log(secretMessage);

secretMessage.unshift('Programming');//Step_5
console.log(secretMessage);

secretMessage.reverse();
for (i = 0; i <= 9; i++){
    secretMessage.pop();
}
secretMessage.push("know","you","what","about","isn't","Proggraming");
secretMessage.reverse();
console.log(secretMessage);