// import renderCountry from './renderCountry'
export default function fetchCountries(searchQuery) {

    const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;
    return fetch(url).then(response => response.json()).then(json=>json);


    // const search = fetch(url).then(response => response.json()).then(json=> renderCountry(json));

}



