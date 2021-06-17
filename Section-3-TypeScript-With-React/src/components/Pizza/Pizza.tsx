import React from "react";
import {IPizzaProps} from "./types";
import PizzaCss from "./Pizza.module.css";

const Pizza: React.FC<IPizzaProps> = (props: IPizzaProps) => {
    const {pizza} = props;

    return (
        <li className={PizzaCss.container}>
            <h2>{pizza.name}</h2>
            <p>{pizza.description}</p>
            <p>{pizza.price}</p>
        </li>
    );
};

export default Pizza;