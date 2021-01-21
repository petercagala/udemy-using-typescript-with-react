export class Robot {
    private _name: string;

    private _color: string | undefined;

    private static availableColors : string[] = ["green", "yellow"];

    constructor(name: string) {
        this._name = name;
    }

    public static isColorAvailable(color: string): boolean {
        return Robot.availableColors.includes(color);
    }


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }


    get color(): string | undefined {
        return this._color;
    }

    set color(color: string | undefined) {
        if (color && !Robot.isColorAvailable(color)) {
            throw new Error(`${color} is not available!!!`)
        } else {
            this._color = color;
        }
    }

    public askName(): void {
        console.log(`My name is ${this._name}`)
    }

    public move(distance: number): void {
        console.log(`${this._name} moved ${distance} meters.`)
    }
}

export class FlyingRobot extends Robot {
    private jetpackSize: number

    constructor(name: string, jetpackSize: number) {
        super(name);
        this.jetpackSize = jetpackSize;
    }


    move(distance: number) {
        console.log(`${this.name} is flying`)
        super.move(distance);
    }
}