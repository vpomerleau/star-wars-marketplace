// "cost_in_credits": "3500000"
// "name": "CR90 corvette"
// 
// "starship_class": "corvette"
// "model": "CR90 corvette"
// "manufacturer": "Corellian Engineering Corporation"
// "max_atmosphering_speed": "950"
// "crew": "30-165"
// "hyperdrive_rating": "2.0"

const starshipsUrl = "https://swapi.dev/api/starships/"
const vehiclesUrl = "https://swapi.dev/api/vehicles/"

let starshipsArray = [];
let vehiclesArray = [];

axios.get(starshipsUrl)
.then(response => {
    // console.log(response.data.results);
    response.data.results.forEach(object =>
        starshipsArray.push(object));
    console.log(starshipsArray);
})

axios.get(vehiclesUrl)
.then(response => {
    // console.log(response.data.results);
    response.data.results.forEach(object =>
        vehiclesArray.push(object));
    console.log(vehiclesArray);
})

