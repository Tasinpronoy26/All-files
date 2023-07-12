const findQuotes = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(n => findData(n))
}

const findData = n => {

    const BlockQuotes = document.getElementById('quote');
    
    BlockQuotes.innerHTML = n.quote;  
    
}

findQuotes();