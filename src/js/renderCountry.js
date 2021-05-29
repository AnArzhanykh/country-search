import ListCountries from '../template/ListCountries'
import SearchCountry from '../template/searchCountry'
import refInputSearch from '../index.js'

import { alert, defaultModules } from '@pnotify/core';
import * as PNotifyMobile from '@pnotify/mobile';

defaultModules.set(PNotifyMobile, {});



export default function renderCountry(country){
    const countryContainerRef = document.querySelector('.country');

    while (countryContainerRef.firstChild) {
        countryContainerRef.removeChild(countryContainerRef.firstChild);
    }

    country.then(arr =>{
        console.log(arr);
        if(arr.length > 10){
                    alert({
            text: 'Notice me, senpai!'
            });
        } 
        if( 1 < arr.length && arr.length <= 10) {
            const markup = ListCountries(arr)
            countryContainerRef.insertAdjacentHTML('beforeend', markup);
        }
        if(arr.length === 1){
            const markup = SearchCountry(arr)
            countryContainerRef.insertAdjacentHTML('beforeend', markup);
            refInputSearch.value = ''
        }
    });
    
}  