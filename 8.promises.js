const userData = new Promise( (resolve, reject) => {
const error = false; // or true

if (error) {
    reject( '404 error' );
}
else {
    resolve({
        firstName: "Mike",
        secondName: "Another one",
        age: "24",
        email: "mikeanotherone@yandex.ru"
    });
}
});

userData
.then((data) => console.log(data))
.catch((error) => console.log(error))