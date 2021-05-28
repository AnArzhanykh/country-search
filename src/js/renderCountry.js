import ListCountries from '../template/ListCountries'
import SearchCountry from '../template/searchCountry'

export default function renderCountry(country){
    const countryContainerRef = document.querySelector('.country')
    country.then(arr =>{
        console.log(arr);
        countryContainerRef.removeChild()
        if(arr.length > 10){
            
        } 
        if( 1 < arr.length && arr.length <= 10) {
            const markup = ListCountries(arr)
            countryContainerRef.insertAdjacentHTML('beforeend', markup);
        }
        if(arr.length === 1){
            const markup = SearchCountry(arr)
            countryContainerRef.insertAdjacentHTML('beforeend', markup);
            console.log(markup);
        }
    });
    
}  