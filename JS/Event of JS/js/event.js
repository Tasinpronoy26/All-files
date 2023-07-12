// option 3

const yellowTitle = document.getElementById('yellow-title');
yellowTitle.onclick = yellowTitleButton


function yellowTitleButton() {
    document.body.style.backgroundColor = 'yellow';
}


// option 3 another

const purpleTitle = document.getElementById('purple-title');
purpleTitle.onclick = function makePurple() {

    document.body.style.backgroundColor = 'purple';

}

// option 4
const greenTitle = document.getElementById('green-title');

greenTitle.addEventListener('click', makeGreenButton);

function makeGreenButton() {
    document.body.style.backgroundColor = 'green';
}

// option 4 another

const pinkTitle = document.getElementById('pink-title');
pinkTitle.addEventListener('click', function () {
    document.body.style.backgroundColor = 'pink';
})

//option 4 final ********

document.getElementById('orange-title').addEventListener('click', function(){
    document.body.style.backgroundColor='orange';
})




