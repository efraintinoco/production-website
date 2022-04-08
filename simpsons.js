
const main = document.querySelector("main")


function simpsonCharacter(simpson) {
   
    const button = document.querySelector("button")
   // button.addEventListner("click",() => )
   
    const div = document.createElement("div")
    div.innerHTML = `
    
    <div>
    <h1>${simpson.character}:</h1>
    <p>"${simpson.quote}"</p>
    
    <figure>
    <img src=${simpson.image} alt=${simpson.character} />
    
    
    
    </figure>
    
    
  </div>
`
    main.append(div)
}


const url = new URL(window.location)
const queryString = new URLSearchParams(url.search)
fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?character=${queryString.get('character')}`)

    .then(urlInfo => {
        return urlInfo.json();
    })
    .then(jsonInfo => {
        
        jsonInfo.forEach(urlInfo => {
            simpsonCharacter(urlInfo)
            console.log(urlInfo)
        });
        
    });
