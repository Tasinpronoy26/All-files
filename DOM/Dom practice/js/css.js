//header

const headTitle = document.getElementById('head-title');
headTitle.style.backgroundColor = 'Red';
headTitle.style.borderRadius = '10px';
headTitle.style.color = 'lightgray';
headTitle.style.textAlign = 'center';
headTitle.style.padding = '20px';


//main

const sections = document.getElementsByClassName('section-title');
for (const section of sections) {
       
    section.style.backgroundColor= 'yellow';
    section.style.color= 'black';
    section.style.margin= '10px';
    section.style.padding= '20px';
    section.style.borderRadius= '10px';

}


//ul

const ulTitles = document.getElementsByClassName('ul-title');
for(const ulTitle of ulTitles){
    ulTitle.style.color= 'red';
}







