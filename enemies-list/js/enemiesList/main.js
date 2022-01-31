// Put your code here




    const enemies=[
        {
            firstName: "Josh",
            lastName: "Flowers",
            offenses: ["Being a jerk to me in elementary school",
            "Not being nice to me in elementary school"], 
            isReallyHated: true
        },
        {
            firstName:"Darth",
            lastName: "Vader",
            offenses:  [
                "Cut off Luke's hand",
                "Murdered all those kids",
                "Unkind management practices"
            ],
            isReallyHated: false
        },
        
        {firstName: "Darth",
        lastName:"Vader",
        offenses: [
            "Cut off Luke's hand",
            "Murdered all those kids",
            "Unkind management practices"
    ],
        isReallyHated: false}
    ]



console.log("My Enemies List!");
console.log("----------------");

const Enemy = () => {
for (let myEnemy of enemies)
{
    if (myEnemy.isReallyHated === true)
    {
        console.log(`${myEnemy.firstName} ${myEnemy.lastName} Really, really dislike!`);
    }
    else
    {
        console.log(`${myEnemy.firstName} ${myEnemy.lastName}`);
    }
}
}

Enemy();