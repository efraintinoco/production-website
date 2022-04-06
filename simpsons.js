
const main = document.querySelector("main")


function simpsonCharacter(simpsons) {

    const div = document.createElement("div")
    div.innerHTML = `
    
    <div>
    <h1>${simpsons.character}:</h1>
    <p>"${simpsons.quote}"</p>
    <figure>
    <img src=${simpsons.image} alt=${simpsons.character} />
    <figcaption><a href="simpsons.html?simpsons=${simpsons.character}">${simpsons.character}</a></figcaption>
    </figure>
    
    
  </div>
`
    main.append(div)
}


const url = new URL(window.location)
const queryString = new URLSearchParams(url.search)
fetch(`https://thesimpsonsquoteapi.glitch.me/quotes${queryString.get('simpsons')}`)

fetch(url)
    .then(urlInfo => {
        return urlInfo.json();
    })
    .then(jsonInfo => {
        jsonInfo.forEach(urlInfo => {
            simpsonCharacter(urlInfo)
        });
    });
