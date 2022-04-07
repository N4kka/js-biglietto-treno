//Asking the user how many km and passenger age

//Declaration
//Kilometers
const userKm = prompt('Quanti chilometri devi percorrere?')
console.log(userKm);

//Age
const userAge = prompt('Quanti anni hai?')
console.log(userAge);

//Elaboration
//Price calculation
let price = 0.21;
console.log(price); 

let cost;

cost = price * userKm;

if (userAge <18) {
    cost = cost - (cost * 20 / 100);
}   else if (userAge >=65) {
    cost = cost - (cost * 40 / 100);
}   else {
    cost = price * userKm;
}

//Final Output
//Showing the price for each age
document.getElementById('price').innerHTML = cost;