
const main = document.querySelector("main")


function setState(simpson) { 

    const div = document.createElement("div")
    div.innerHTML = `
    
    <div>
    <h1>${simpson.character}:</h1>
    <p>"${simpson.quote}"</p>
    <img src=${simpson.image} alt=${simpson.character} <a href="simpsons.html?quote=${simpson.character}"> />
    <button onClick=${simpson.callTheApi}>Next Character</button>
  </div>
`
main.append(div)
}


const url = new URL(window.location)
const queryString = new URLSearchParams(url.search)
fetch(`https://thesimpsonsquoteapi.glitch.me/quotes${queryString.get('quote')}`)
  
        fetch(url)
            .then(urlInfo => {
                return urlInfo.json();
            })
            .then(jsonInfo => {
                console.log(jsonInfo);
                this.setState({
                    quote: jsonInfo[0].quote,
                    character: jsonInfo[0].character,
                    image: jsonInfo[0].image,
                    characterDirection: jsonInfo[0].characterDirection,
                    prueba: true
                });
            });
