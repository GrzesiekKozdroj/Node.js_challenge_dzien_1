//Twój kod
const argumenty = process.argv;
const dodej = argumenty.slice(2, argumenty.length);

let suma = 0;
let dodawanie = dodej.forEach((value) => {
   suma += Number(value);
   });
console.log(suma);