import React from 'react';
import Country from '../Country/Country';

const Card = (props) => {
    const cart = props.cart;
    // let totalPopulation = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     totalPopulation = totalPopulation + cart[i].population;
    // }
    const totalPopulation = cart.reduce((sum,country) => sum + country.population,0)
    return (
        <div>
            <h2>This is card:{cart.length}</h2>
            <p>Total Population:{totalPopulation}</p>
        </div>
    );
};

export default Card;