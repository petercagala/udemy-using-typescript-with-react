import React, {useMemo} from "react";
import pizzasJson from "../data/pizza.json";
import Pizza, {IPizza} from "./Pizza";

const App = () => {
    const pizzas: IPizza[] = useMemo<IPizza[]>((): IPizza[] => {
        return pizzasJson;
    },[pizzasJson]);

    console.log("App - pizzas", pizzas);

    return <ul>
        {pizzas.map((pizza: IPizza) => {
            return (
                <Pizza key={pizza.id} pizza={pizza}/>
            )
        })}
    </ul>;
};

export default App;