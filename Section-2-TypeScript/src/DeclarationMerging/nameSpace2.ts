function someFunction(): number {
    return 10;
}

namespace someFunction {
    export const someProperty: number = 10;
}

const calculateNumber: number = someFunction();
const somePropertyOfFunction: number = someFunction.someProperty;