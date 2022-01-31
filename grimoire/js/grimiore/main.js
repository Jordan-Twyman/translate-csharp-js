// Put your code here



const GetAllSpells = () => {
const allSpells = [
    {
        name:"Turn enemy into a newt",
        isEvil: true,
        energyReqired: 5.1
    },
    {
        name: "Conjure some gold for a local charity",
        isEvil: false,
        energyReqired: 2.99
    },
    {
        name: "Give a deaf person the ability to heal",
        isEvil: false,
        energyReqired: 12.2
    },
    {
        name: "Make yourself emperor of the universe",
        isEvil: true,
        energyReqired: 100.0
    },
    {
        name: "Convince your relatives your political views are correct",
        isEvil: false,
        energyReqired: 2921.5
    }
];
return allSpells;
}

const MakeEvilSpellBook = (allSpells) => {
    const evilBook = {};
    evilBook.title = "Evil Book";
    evilBook.spells = allSpells.filter(s => s.isEvil);

    return evilBook;

}

const MakeGoodSpellBook = (allSpells) => {
    const goodBook = {};
    goodBook.title = "Good Book";
    goodBook.spells = allSpells.filter(s => !s.isEvil);

    return goodBook;

}

const allSpells = GetAllSpells();
const goodBook = MakeGoodSpellBook(allSpells);
const evilBook = MakeEvilSpellBook(allSpells);

function DisplaySpellBook(book)
{
    console.log(book.title);
    for (let aSpell of book.spells)
    {
        console.log(`${aSpell.name}`)
    }
}
console.log("Do you believe in magic?");
console.log("------------------------");


DisplaySpellBook(goodBook);
console.log("---");
DisplaySpellBook(evilBook)