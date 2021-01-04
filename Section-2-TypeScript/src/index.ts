import myMultiply, { multiplyByTwo, IHelloWorld} from "./Modules/multiply";

// we can import all as namespace
// import * as multiplyModule from "./Modules/multiply.js"

const a: number = 40;
const b: number = 3;

console.log(`${a} * ${b} = `, myMultiply(a,b));
console.log(`${a} * 2 = `, multiplyByTwo(a));