import React, {useMemo} from "react";
import pizzasJson from "../data/pizza.json";
import Pizza, {IPizza} from "./Pizza";
import AppCss from "./App.module.css";

const App = () => {
    const pizzas: IPizza[] = useMemo<IPizza[]>((): IPizza[] => {
        return pizzasJson;
    },[pizzasJson]);

    console.log("App - pizzas", pizzas);

    return (
        <div className={AppCss.container}>
            <ul>
                {pizzas.map((pizza: IPizza) => {
                    return (
                        <Pizza key={pizza.id} pizza={pizza}/>
                    )
                })}
            </ul>
        </div>
    );
};

export default App;