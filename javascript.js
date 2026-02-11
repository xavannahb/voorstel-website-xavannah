// API Ophalen
let base = "https://fdnd.directus.app/items"

// API functie 4 honden liefhebbers 
let deLijst = document.querySelector("#dialog11 ul")

getMinorMensen()

async function getMinorMensen() {
  let endpoint = "/person?filter[squads][squad_id][tribe][name]=CMD%20Minor%20Web%20Dev&filter[squads][squad_id][cohort]=2526&filter[fav_animal]=Hond&limit=4"
  let url = base + endpoint
    
    let response = await fetch(url)
    let responseJson = await response.json()
    let deMinorMensen = responseJson.data

    deMinorMensen.forEach( deMinorMens => {
        console.log(deMinorMens)

        let deMinorMensHTML =
        `<li>
            <h2>${deMinorMens.name}</h2>
            <p>Favoriete dier: ${deMinorMens.fav_animal}</p>
          </li>`
    
    deLijst.insertAdjacentHTML("beforeend", deMinorMensHTML)
    })
}
// Bron: Gedaan in de les met Sanne


// API functie Louise
let deLijstLouise = document.querySelector("#dialog6 ul")

getLouise()

async function getLouise() {
  let endpoint = "/person/304"
  let url = base + endpoint

  let response = await fetch(url)
  let responseJson = await response.json()
  let louise = responseJson.data 

  let louiseHTML =
    `<li>
      <h2>${louise.name}</h2>
      <p>Naam: ${louise.nickname}</p>
      <p>Persoonlijke website: ${louise.website}</p>
      <p>Verjaardag: ${louise.birthdate}</p>
      <p>Favoriete emoji: ${louise.fav_emoji}</p>
      <p>Favoriete seizoen: ${louise.fav_season}</p>
    </li>`

  deLijstLouise.insertAdjacentHTML("beforeend", louiseHTML)
}
// Bron: De namen naar Louise aangepast en de functie forEach weggelaten omdat er maar 1 persoon wordt opgehaald.

// list.js search functie 
var options = {
    valueNames: [ 'title', 'description' ]
};

var tegelList = new List('tegels', options);
// Bron: https://listjs.com/examples/existing-list/

// filteren op class 
document.querySelectorAll('.filters button').forEach(function(button) {
    button.addEventListener('click', function() {

        var category = this.getAttribute('data-filter');

        if (category === 'all') {
            tegelList.filter();
        } else {
            tegelList.filter(function(item) {
                return item.elm.classList.contains(category);
            });
        }

    });
});
// Bron: https://listjs.com/examples/existing-list/ en de rest is gedaan met chatGPT als hulp prompt:'Kan je mij helpen om classes aan de li te geven om te kunnen filteren tussen de li. Dus als deze geklikt worden dat ze tonen.'

// Bron: Gedaan in de les met Sanne
document.querySelectorAll('.filters button').forEach(button => {
  button.addEventListener('click', function () {

    document.querySelectorAll('.filters button').forEach(btn => {
      btn.classList.remove('active');
    });

    this.classList.add('active');
  });
});
// Bron: ChatGPT | Dezelfde prompt als hierboven:'Kan je mij helpen om classes aan de li te geven om te kunnen filteren tussen de li. Dus als deze geklikt worden dat ze tonen.'
