const url = "https://thesimpsonsquoteapi.glitch.me/quotes?count=50"
const main = document.querySelector("main")


function simpsonCharacter(simpson) {

    const div = document.createElement("div")
    div.innerHTML = `
    <div>
    
    <figure>
    <img src=${simpson.image} alt=${simpson.character} />
    <figcaption><a href="simpsons.html?character=${simpson.character}">${simpson.character}</a></figcaption>
    </figure>
    
    </div>
`
    main.append(div)
}


fetch(url)
    .then(response => {
        return response.json();
        
    })

    .then(response => {
        response.filter(character => character === "Homer Simpson" || "Bart Simpson")
            .forEach(response => {
                simpsonCharacter(response)
                console.log(response)
            })
    })