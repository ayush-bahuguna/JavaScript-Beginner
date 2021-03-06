const button = document.querySelector('.get-quote') ;
const allAnime = document.querySelector('.all-anime') ;
const quote = document.querySelector('.quote') ;
const savedQuotes = document.querySelector('.saved-quotes') ;

button.addEventListener('click', fetchDataByTitle) ;
allAnime.addEventListener('click', fetchAllAnime) ;

function fetchDataByTitle() {
    const title = document.querySelector('.anime-title').value ;
    fetch(`https://animechan.vercel.app/api/quotes/anime?title=${title}`)
    .then(res => res.json())
    .then(data => fetchQuote(title, data)) ;
}

function fetchQuote(title, data) {
    const quoteIndex = Math.floor(Math.random() * 10);
    const animeHero = data[quoteIndex].character ;
    const animeQuote = data[quoteIndex].quote ;
    //console.log(animeHero, animeQuote) ;   
    displayQuote(title, animeHero, animeQuote) ;
    // for(const key of Object.keys(data)) {
    //     console.log(data[key]) ;
    // }
}

function displayQuote(title, hero, quote) {
    document.querySelector('.anime-title').innerHTML = title ;
    document.querySelector('.anime-hero').innerHTML = hero ;
    document.querySelector('.quote').innerHTML = quote ;
}

function fetchAllAnime() {
    fetch('https://animechan.vercel.app/api/available/anime')
    .then(res => res.json())
    .then(data => console.log(data)) ;
}

quote.addEventListener('click', function saveQuote() {
    const hero = document.querySelector('.anime-hero').innerHTML ;
    const quote = document.querySelector('.quote').innerHTML ;
    
    const addHero = document.createElement('h3') ;
    addHero.appendChild(document.createTextNode(hero)) ;
    savedQuotes.appendChild(addHero) ;
    
    const addQuote = document.createElement('p') ;
    addQuote.appendChild(document.createTextNode(quote)) ;
    savedQuotes.appendChild(addQuote) ;
}) ;
