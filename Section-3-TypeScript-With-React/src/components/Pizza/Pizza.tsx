import React from "react";
import {IPizzaProps} from "./types";

const Pizza: React.FC<IPizzaProps> = (props: IPizzaProps) => {
    const {pizza} = props;

    return (
        <li>
            <h2>{pizza.name}</h2>
            <p>{pizza.description}</p>
            <p>{pizza.price}</p>
        </li>
    );
};

export default Pizza;