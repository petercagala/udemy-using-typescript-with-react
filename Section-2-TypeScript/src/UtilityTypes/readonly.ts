interface Starship3 {
    name: string;
    enableHyperjump: boolean;
}


const updateStarship3 = (id: number, starship: Readonly<Starship3>): void => {
    // we can not overwrite Readonly attributes
};

// I have to define all attributes of Starship2 in spite of the fact, there are all optional in the original interface
updateStarship3(1, {
    name: "Explorer",
    enableHyperjump: true,
});