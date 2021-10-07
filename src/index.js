import './sass/main.scss';

import filterCountries from './js/filterCountries';
var debounce = require('lodash.debounce');

let refInputSearch = document.querySelector('.search-country');

const debouncedInput = debounce(changeSearch, 500)

refInputSearch.addEventListener('input', debouncedInput);

function changeSearch(e){

    const searchQuery = e.target.value;

    if(searchQuery === ' ' || searchQuery === '') return;
    
    filterCountries(searchQuery);
    e.target.value = '';

}



