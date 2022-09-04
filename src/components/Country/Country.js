import React from 'react';

const Country = (props) => {
    let { name, population, region, flag } = props.country;
    const flagStyle = {
        height: '100px',
    }
    const countryStyle = { border: '2px solid red', margin: '10px', padding: '10px' }
    return (
        <div style={countryStyle}>

            <h4>This is a {name}</h4>
            <img style={flagStyle} src={flag} alt="" srcset="" />
            <p>Population:{population}</p>
            <p><small>Region:{region}</small></p>
            <button onClick={() => props.button(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;