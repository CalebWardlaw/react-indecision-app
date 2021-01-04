// arguments object - no longer bound with arrow functions

const add = function (a, b) {
    //Cannot acces arguments w/ arrow function, use es5 instead
    // console.log(arguments)
    return a + b;
}

console.log(add(55,1))

// this keyword - no longer bound

const user = {
    name: 'Caleb',
    cities: ['Honolulu', 'Antarctica', 'Columbia'],
    printPlacesLived: function (){
        //this.name is accesible here
        console.log(this.name);
        console.log(this.cities);

        this.cities.forEach(function (city) {
            //this.name is unaccesible here (use ES6 instead so it calls from parent)
            console.log(this.name + ' has lived in ' + city);
        })

    }
}