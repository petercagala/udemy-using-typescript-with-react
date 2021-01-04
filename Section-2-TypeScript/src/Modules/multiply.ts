export interface IHelloWorld {}

export default function multiply(a: number, b: number): number {
    return a * b;
}

export function multiplyByTwo(a: number): number {
    return multiply(a, 2);
}