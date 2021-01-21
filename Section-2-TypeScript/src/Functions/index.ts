export const sumFunction1 = (a: number, b: number): number => {
    return a = b;
};

type functionType2_1 = (a: number, b: number) => number;
type functionType2_2 = (a: number, b?: number) => number;
export const sumFunction2_1: functionType2_1 = (a, b) => a +b;
// optional param
export const sumFunction2_2: functionType2_2 = (a: number, b?: number): number => {
    return a + (b || 0);
};
// default value
export const sumFunction2_3 = (a: number, b : number = 0): number => {
    return a + b;
};

// unknown number of arguments
export const sumEverything = (...numnbers: number[]): number => {
    return numnbers.reduce((previousValue: number, currentValue: number) => previousValue + currentValue)
};

// Overloads
export function calculationArea(width: number, heigh: number): number;
export function calculationArea(length: number): number;

export function calculationArea(...args: number[]): number {
    if (args.length === 2) {
        return args[0] * args[1];
    }
    return Math.pow(args[0], 2);
};
