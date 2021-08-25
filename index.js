const readlineSync = require('readline-Sync');
let nome = readlineSync.question("Qual o seu nome?");
console.log(`Obrigado ${nome}`);