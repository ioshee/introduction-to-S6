const student = {
    name: "Kyle",
    age: 24,
    projects: {
        diceGame: "two player dice game using JavaScript"
    }
}

const { name, age, projects: { diceGame } } = student;

console.log(`${name} is ${age} years old`);
console.log(`${name} says that ${diceGame}`);