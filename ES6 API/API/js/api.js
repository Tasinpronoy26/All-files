//Normal

const info = {
    name: 'Tasin',
    age: 26,
    Phone : '01533767026',
    
    address: {
        city: 'Dhaka',
        Country: 'BD',
    },

    education : {

        ssc : 5.00,
        hsc : 5.00,
    }
    
}

//API

const infoString = JSON.stringify(info);

// console.log(infoString);

//parse

const infoParse = JSON.parse(infoString);

console.log(infoParse);