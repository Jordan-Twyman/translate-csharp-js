// Put your code 
const RollTheDice = () => {

 


console.log("Let's roll some dice, baby!");
console.log("---------------------------");

for (let i = 0; i < 10; i++) {

    const Roll1 = Math.floor(Math.random() * 6) + 1
    const Roll2 = Math.floor(Math.random() * 6) + 1

    let die1 = Roll1;
    let die2 = Roll2;

    

    const message = (`${die1} + ${die2} = ${die1 + die2}`)  
    if (die1 === die2){
        console.log (`${message} DOUBLES!`)
    }
    else{
    console.log(message);
    }
}

}
RollTheDice()
