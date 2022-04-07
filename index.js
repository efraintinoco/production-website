const url = "https://thesimpsonsquoteapi.glitch.me/quotes?count=40"
const main = document.querySelector("main")


function simpsonCharacter(simpson) {

    const div = document.createElement("div")
    div.innerHTML = `
    <div>
    <h1><a href="index.html?character=${simpson.character}">SIMPSON'S</a><h1>
    <h2>${simpson.character}:</h2>
    
    <figure>
    <img src=${simpson.image} alt=${simpson.character} />
    <figcaption><a href="simpsons.html?character=${simpson.character}">${simpson.character}</a></figcaption>
    </figure>
    
    </div>
`
    main.append(div)
}


fetch(url)
    .then(urlInfo => {
        return urlInfo.json();
        
    })
    .then(jsonInfo => {
        console.log(jsonInfo)
        jsonInfo.forEach(urlInfo => {
            simpsonCharacter(urlInfo)


        });
    });


