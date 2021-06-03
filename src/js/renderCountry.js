import ListCountries from '../template/ListCountries'
import SearchCountry from '../template/searchCountry'

import { alert, notice, info, success, error, defaultModules } from'@pnotify/core';
import"@pnotify/core/dist/PNotify.css";
import"@pnotify/core/dist/BrightTheme.css";

import refInputSearch from '../index.js'


const countryContainerRef = document.querySelector('.country');

export default function renderCountry(country){

    clear()

    country.then(arr =>{
        if(arr.length > 10){
            renderAlert()
        } 
        if( 1 < arr.length && arr.length <= 10) {
            const countryOne = arr.find(element => element.name.toLowerCase() === refInputSearch.value.toLowerCase());
            if(countryOne){
                renderSearchCountry([countryOne])
            } else {
            console.log(arr);
            renderListCountries(arr)
            }


        }
        if(arr.length === 1){
            renderSearchCountry(arr)
            console.log(arr);
        }
    });
    
}  


function clear(){
    countryContainerRef.innerHTML = '';
}

function renderAlert(){
    const myError = error({
        text:'Too many matches found. Please enter a more specific quary!'
    });
}

function renderListCountries(arr){
    const markup = ListCountries(arr)
    countryContainerRef.insertAdjacentHTML('beforeend', markup);
}

function renderSearchCountry(arr){
    const markup = SearchCountry(arr)
    countryContainerRef.innerHTML = markup;

}