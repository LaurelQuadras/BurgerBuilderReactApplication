import React from 'react';
import Auxilary from '../../../hoc/Auxillary';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
        return (<li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
                </li>);
    });

    return (
        <Auxilary>
            <h3>Your order</h3>
            <p>Delicious burger with the folowing ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout?</p>
        </Auxilary>
    );
};

export default orderSummary;