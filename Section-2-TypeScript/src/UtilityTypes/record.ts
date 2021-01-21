interface Starship4 {
    name: string;
    enableHyperjump: boolean;
}


const updateStarship4 = (id: number, starship: Partial<Starship4>): void => {
    if (starship.name) {
        // update name
    }
    if (starship.enableHyperjump) {
        // update enableHyperjump
    }
};

// I want to update name only
updateStarship4(1, {
    name: "Explorer",
});

const starShips: Record<string, Starship4> = {
    Explorer1: {
        name: "Explorer1",
        enableHyperjump: true,
    },
    Explorer2: {
        name: "Explorer2",
        enableHyperjump: false,
    }
}