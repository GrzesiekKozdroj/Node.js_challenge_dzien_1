//Twój kod
const sentence = ["Witam", "się", "z", "programem", "Node.js","i korzytsam", "z funkcji czasu!"];

let counter = 0;

const intervalID = setInterval(()=>{
    console.log(sentence[counter]);
    counter++;
    if(counter > 6){clearInterval(intervalID)}
}, 1000);
