var items = [50, 60, 70, 50, 40, 100, 200, 30, 20, 10];

for(i=0; i<items.length; i++){

    var item = items[i];
    if(item > 50){
        continue;
    } 
    console.log(item);

}