function helloWorld(): string {
    return "Hello World";
}

type HelloWorldReturnTypeString = ReturnType<typeof helloWorld>; // string: on zoberie cely typ () => string a vytiahne z neho string
type HelloWorldReturnTypeFunction = typeof helloWorld; // () => string

const helloWorldName: HelloWorldReturnTypeString = "Hello world XXX";

// **************************************************************
// other example
interface StarShipProperties2 {
    color?: 'blue' | 'red' | 'green';
}

// As color is optional, I don't want to have null or undefined in 2 parameter
function paintStarShip2(id: number, color: NonNullable<StarShipProperties2['color']>) {
    return {
        id,
        color,
    }
}

type PaintStarShipReturn = ReturnType<typeof paintStarShip2>;

paintStarShip2(1, "green");

const myPaintStarShipReturn: PaintStarShipReturn = {
    id: 2,
    color: "green",
};