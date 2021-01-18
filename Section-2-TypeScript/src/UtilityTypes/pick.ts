interface Starship5 {
    name: string;
    enableHyperjump: boolean;
}

// I would like to create a new type with only the name property
type StarshipNameOnly = Pick<Starship5, 'name'>;

const starshipNameOnly: StarshipNameOnly = {
    name: "MyStarShip",
};