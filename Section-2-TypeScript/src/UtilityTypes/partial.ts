interface Starship {
    name: string;
    enableHyperjump: boolean;
}


const updateStarship = (id: number, starship: Partial<Starship>): void => {
    if (starship.name) {
        // update name
    }
    if (starship.enableHyperjump) {
        // update enableHyperjump
    }
};

// I want to update name only
updateStarship(1, {
    name: "Explorer",
});