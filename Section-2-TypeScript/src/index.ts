import myMultiply, { multiplyByTwo, IHelloWorld} from "./Modules/multiply";
import {IIndexSignatureInterface1, IIndexSignatureInterface2, ISum} from "./Interfaces";
import {calculationArea, sumEverything, sumFunction2_2, sumFunction2_3} from "./Functions";
import {FlyingRobot, Robot} from "./Classes";

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
// const email: HTMLElement | null = document.getElementById("email");
// if (email) {
//     email.addEventListener('change', (ev: Event) => {
//         const input = ev.currentTarget as HTMLInputElement;
//         console.log(input.value);
//     })
// }


console.log(`${a} * ${b} = `, myMultiply(a,b));
console.log(`${a} * 2 = `, multiplyByTwo(a));

// Interfaces

// Index Signature
const indexSignature1: IIndexSignatureInterface1 = {
    property1: 1,
    property2 : 2,
    property3: 3,
}
const indexSignature2: IIndexSignatureInterface2 = {
    property1: {
        car: "car1",
        cat: "cat1",
        train: "train1",
    },
    property2: {
        car: "car1",
        cat: "cat1",
        train: "train1",
    },
};

// Call Signature
const sumCalculation = (a: number, b: number): number => {
    return a + b;
};
const callSignature1: ISum = {
    sumCalculate: sumCalculation,
    prop1: "nejakaProp",
}

console.log("indexSignature2.property1.car:", indexSignature2.property1.car);
console.log("indexSignature2.property2.car:", indexSignature2.property2.car);
console.log("callSignature1.sumCalculate(1,2)", callSignature1.sumCalculate(1,2));

// Functions
console.log("sumFunction2_2(2,3)", sumFunction2_2(2,3));
console.log("sumFunction2_2(2)", sumFunction2_2(2));
console.log("sumFunction2_3(2)", sumFunction2_3(2));
console.log("sumEverything(1,2,2,3):  ", sumEverything(1,2,2,3));
console.log("calculationArea(3) : ", calculationArea(3))
console.log("calculationArea(3,4) : ", calculationArea(3, 4))
console.log("******************************************************************")
console.log("******************************************************************")

// Classes
const robot = new Robot("Peter");
robot.askName();
robot.move(12);

const flyingRobot = new FlyingRobot("Karol", 100);
flyingRobot.name = "Katka";
flyingRobot.askName();
flyingRobot.move(14);
console.log(`Color of ${flyingRobot.name} is ${flyingRobot.color}`)
flyingRobot.color  = "red";
console.log(`Robot ${flyingRobot.name} has ${flyingRobot.color} color!!!`)
