export interface IPizza {
    id: number;
    name: string;
    description: string;
    price: number;
}

export interface IPizzaProps {
    pizza: IPizza;
}