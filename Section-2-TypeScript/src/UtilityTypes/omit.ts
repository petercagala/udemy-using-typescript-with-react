interface Starship6 {
    name: string;
    enableHyperjump: boolean;
}

// I would like to create a new type with only the name property
type StarshipNamePick = Pick<Starship6, 'name'>;
type StarshipNameOmit = Omit<Starship6, 'name'>

const starshipNamePick: StarshipNamePick = {
    name: "MyStarShip",
};

const starshipNameOmit: StarshipNameOmit = {
    enableHyperjump: false,
};