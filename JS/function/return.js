// function sum(num1, num2){
//     console.log(num1, num2);
//     var add = num1 + num2;
//     return add;

// }

// var sums = sum(12, 13);
// console.log('result', sums);

function bringSingara(money){

    console.log(money);
    
    var singaraPrice = 5; 
    var quantity = money/singaraPrice;
    return quantity;
}

var totalmoney = bringSingara(200);
console.log('Given', totalmoney);