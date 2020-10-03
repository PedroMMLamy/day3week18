import React from 'react';
import { Link } from 'react-router-dom';
function CountriesList(props) {
    const { countries } = props;
    return (
        <>
            { countries.map(country => {
                return (
                    <Link key={country.cca3} to={'/' + country.cca3} className='list-group-item list-group-item-action'> 
                        <span role='img'> {country.flag}</span> {country.name.common}
                    </Link>
                )
            })}
        </>
    );
}

export default CountriesList;