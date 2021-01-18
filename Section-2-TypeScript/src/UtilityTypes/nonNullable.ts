interface StarShipProperties {
    color?: 'blue' | 'red' | 'green';
}

// As color is optional, I don't want to have null or undefined in 2 parameter
function paintStarShip(id: number, color: NonNullable<StarShipProperties['color']>): void {

}

paintStarShip(1, "green");