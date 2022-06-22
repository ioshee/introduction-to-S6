//before
/* function addressMaker(address) {
    city: address.city,
    state: address.state,
    country: "United States" 
};
addressMaker({city: 'Austin', state: 'Texas'}); */

//after
function addressMaker(address) {
    const {city, state, country} = address;

    const newAddress = {
        city,
        state,
        country: "United States"
    };

    console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`);

};

addressMaker({city:'Austin', state:'Texas'});