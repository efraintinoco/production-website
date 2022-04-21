const main = document.querySelector('main')

function simpsonCharacter (simpson) {
  const div = document.createElement('div')
  div.innerHTML = `
    <div>
        <h1>${simpson.character}:</h1>
        <p>"${simpson.quote}"</p>
        <figure>
            <img src=${simpson.image} alt=${simpson.character} />
            <figcaption><a href="index.html?character=${simpson.character}">${simpson.character}</a></figcaption>
            <a href="simpsons.html?character=${simpson.character}">next quote</a>
        </figure>
    </div>
    `
  main.append(div)
}

const url = new URL(window.location)
const queryString = new URLSearchParams(url.search)
fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?character=${queryString.get('character')}`)

  .then(urlInfo => {
    return urlInfo.json()
  })
  .then(jsonInfo => {
    jsonInfo.forEach(urlInfo => {
      simpsonCharacter(urlInfo)
      console.log(urlInfo)
    })
  })
