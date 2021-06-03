import './sass/main.scss';
import fetchCountries from './js/fetchCountries';
import renderCountry from './js/renderCountry';
var debounce = require('lodash.debounce');

let refInputSearch = document.querySelector('.search-country');

refInputSearch.addEventListener('input', debounce(changeSearch, 500));

function changeSearch(){

    const searchQuery = refInputSearch.value;

    if(searchQuery === ' ' || searchQuery === '') return;

    const searchCountry = fetchCountries(searchQuery);
    
    renderCountry(searchCountry);
}


export default refInputSearch;

