let = getAllBeers();
console.log("beers", beers);
function getAllBeers() {
  return fetch("https://api.punkapi.com/v2/beers")
    .then((res) => res.json())
    .then((beerData) => singleBeer(beerData));
}
//function to create render one FILM
function singleBeer(beers) {
  console.log(beers);
  let beerList = "";
  beers.forEach((beer) => {
    beerList += appendItemOnList(beer);
  });
  document.getElementById("beers").innerHTML = beerList;
}
let beer='';
function appendItemOnList() {
  let beerList = `<li class="list-beers" onclick="getOneBeer"(${beer.id})"><a >${beer.name} </a></li> `;
  return beerList;
}
function getOneBeer(id) {
  console.log("beer id", id);
  let url = "https://api.punkapi.com/v2/beers" + id;
  fetch(url)
    .then((res) => res.json())
    .then((beerData) => datForEach(beerData));
}
