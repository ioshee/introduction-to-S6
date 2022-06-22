class Player {
    constructor(name, country) {
        this.name = name;
        this.country = country;
    }
    introduce() {
        console.log(this.name + " was born in " + this.country);
    }
}
const messi = new Player('Messi', 'Argentina');
messi.introduce();

class tennisPlayer extends Player {
    constructor(name, country, age) {
        super(name, country);
        this.age = age;
    }
    text() {
        console.log(this.name + " is " + this.age + " years old and knows how to play Tennis");
    }
}
const radan = new tennisPlayer('Radan Fort', 'India', '24');
radan.introduce();
radan.text();
