const main = document.querySelector('main')

function simpsonCharacter(simpson) {
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

const queryString = new URLSearchParams(window.location.search)
fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?character=${queryString.get('character')}`)
  .then(urlInfo => {
    return urlInfo.json()
  })
  .then(jsonInfo => {
    jsonInfo.forEach(urlInfo => {
      simpsonCharacter(urlInfo)
    })
  })
  .catch(error => {
    console.error(error.message)
    window.location.href = "404.html"
  })