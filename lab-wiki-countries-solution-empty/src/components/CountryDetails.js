import React from 'react';
import { Link } from 'react-router-dom';

function CountryDetails(props) {
    const cca3 = props.match.params.cca3;
    const country = props.countries.find(country => country.cca3 === cca3)
    return (
        <div className='col-7'>
            <h1>
                {country.name.common}
            </h1>
            <table className='table'>
                <thead />
                <tbody>
                    <tr>
                        <td style={{ width: '20%' }}> Capital</td>
                        <td> {country.capital} </td>
                    </tr>
                    <tr>
                        <td style={{ width: '20%' }}> Area </td>
                        <td> {country.area} Km </td>
                    </tr>
                    <tr>
                        <td> Borders </td>
                        <td>
                            <ul>
                                {country.borders.map(cca3 => {
                                    return (
                                        <li key={cca3}>
                                            <Link  to={'/' + cca3}>{props.countries.find(country => country.cca3 === cca3).name.common}</Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default CountryDetails;