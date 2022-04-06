const url ="https://thesimpsonsquoteapi.glitch.me/quotes?count=50"
const main = document.querySelector("main")


function setState(simpson) { 

    const div = document.createElement("div")
    div.innerHTML = `
    <div>
    <h1>${simpson.character}:</h1>
    <p>"${simpson.quote}"</p>
    <img src=${simpson.image} alt=${simpson.character} />
    <button onClick=${simpson.callTheApi}>Next Character</button>
  </div>
`
main.append(div)
}

  
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

 
