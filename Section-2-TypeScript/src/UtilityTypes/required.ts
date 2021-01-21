interface Starship2 {
    name?: string;
    enableHyperjump?: boolean;
}


const updateStarship2 = (id: number, starship: Required<Starship2>): void => {

};

// I have to define all attributes of Starship2 in spite of the fact, there are all optional in the original interface
updateStarship2(1, {
    name: "Explorer",
    enableHyperjump: true,
});