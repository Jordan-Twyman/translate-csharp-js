
const nameNames = () => {
const names = ["Nashville", "Hong Kong", "The back yard", "Earth","London", "The mall", "Ryman Auditorium", "The Great Wall of China"]


for(const name of names) {
    console.log(names)

}

const theNames = names.filter(n =>
    n.startsWith("The"))
    for(let name of theNames) {
        console.log(name)
    }



}

nameNames()