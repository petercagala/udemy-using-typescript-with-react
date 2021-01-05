import myMultiply, { multiplyByTwo, IHelloWorld} from "./Modules/multiply";

// we can import all as namespace
// import * as multiplyModule from "./Modules/multiply.js"

const a: number = 40;
const b: number = 3;
const c: number | null = null;
// const d: number = null; // if we set "strictNullChecks": true in tsconfig.json, we are not able to refer

// Object
type primitiveTypes = boolean | number | string | symbol | null | undefined;
// const myObject: object = true; // we can't assig primitive types to object type
const myObject: object = {}

// Type Assertions
const email: HTMLElement | null = document.getElementById("email");
if (email) {
    email.addEventListener('change', (ev: Event) => {
        const input = ev.currentTarget as HTMLInputElement;
        console.log(input.value);
    })
}


console.log(`${a} * ${b} = `, myMultiply(a,b));
console.log(`${a} * 2 = `, multiplyByTwo(a));