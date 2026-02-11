
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

// list.js search functie 

var options = {
    valueNames: [ 'title', 'description' ]
};

var tegelList = new List('tegels', options);


// filteren op categorie

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


document.querySelectorAll('.filters button').forEach(button => {
  button.addEventListener('click', function () {

    document.querySelectorAll('.filters button').forEach(btn => {
      btn.classList.remove('active');
    });

    this.classList.add('active');
  });
});
