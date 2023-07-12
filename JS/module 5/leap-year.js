function isLeapYear (year){

    const remainder = year % 4;
    if(remainder === 0){
        return true;
    }
    else{
        return false;
    }
}

const myYear = isLeapYear(1997);
console.log(myYear); 