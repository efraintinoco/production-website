const url = "https://thesimpsonsquoteapi.glitch.me/quotes?count=500"
const main = document.querySelector("main")
const form = document.querySelector("form")
const welcomeMessage = document.getElementById("welcomeMessage")



form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(event.target)
    const firstName = formData.get("first-name")
    document.getElementById("welcomeMessage").innerHTML = `Welcome ${firstName} ! <br> Click below for your Mystery Quote`;
    
    localStorage.setItem("first-name",firstName);
    const form = document.querySelector("form")
    form.classList.add("hidden")
    console.log(form)
    
  
});



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
        const imageURLs = response.map(character => character.image)
        const uniqueImageURLs = [...(new Set(imageURLs))]
        uniqueImageURLs.map(imageURL => {
            return {
                image: imageURL,
                character: response.find(character => character.image === imageURL).character
            }
        }).forEach(character => simpsonCharacter(character))
    })
.catch(error => { 
    console.error(error.message);
});