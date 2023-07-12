var money = 500;
var price = 600;
var quantity = 2;
var car = 1;


// if ( money > price ){

//     console.log('I will buy');

// }
// else{
//     console.log('I will it what i can buy');
// }

//multiple condition

// if ( price < money && quantity == 1 ){

//     console.log( ' accepted ');
// }

// else {
//     console.log( 'Rejected');
// }


// if ( price < money || quantity == 1){

//     console.log( 'khete parba');    
// }

// else {
//     console.log ('Khete parba na');
// }

if (price < money && (quantity == 1 || car >=1)){

    console.log('accepted');
}
else{
    console.log('rejected');
}
