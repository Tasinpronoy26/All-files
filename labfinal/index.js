function calculate() {

    let kg = document.getElementById('kg').value;
    let pound = document.getElementById('pound').value;
    let gram = document.getElementById('gram').value;


    if (kg) {

        let kg = document.getElementById('kg').value;
        let pound = document.getElementById('pound');
        let gram = document.getElementById('gram');
        let p = pound.value = 900 * kg;
        let g = gram.value = 1000 * kg;

    }

    else if (pound) {

        let pound = document.getElementById('pound').value;
        let kg = document.getElementById('kg');
        let gram = document.getElementById('gram');
        let k = kg.value = 900 / pound;
        let g = gram.value = 1000 / pound;

    }

    /*Here I did mistake in condition that's why the value of gram was not showing in lab final*/ 

    else if (gram) {

        let gram = document.getElementById('gram').value;
        let kg = document.getElementById('kg');
        let pound = document.getElementById('pound');
        let k = kg.value = 1000 / gram;
        let p = pound.value = 900 / gram;
    }

}