import ListCountries from '../template/ListCountries'
import SearchCountry from '../template/searchCountry'



import { alert, notice, info, success, error, defaultModules } from'@pnotify/core';
import"@pnotify/core/dist/PNotify.css";
import"@pnotify/core/dist/BrightTheme.css";


const countryContainerRef = document.querySelector('.country');

export default function renderCountry(country){

    clear()

    country.then(arr =>{
        console.log(arr);
        if(arr.length > 10){
            renderAlert()
        } 
        if( 1 < arr.length && arr.length <= 10) {
            renderListCountries(arr)         
        }
        if(arr.length === 1){
            renderSearchCountry(arr)
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