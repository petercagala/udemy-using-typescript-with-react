///////
namespace MyNameSpace {
    export const x: number = 10;
    export interface  SomeInterface {
        y: number;
    }
}
///////

namespace MyNameSpace {
    export const getX = (): number => x; // export is important, we can use x when is exported only
    export interface  SomeInterface {
        z: number;
    }
}

// NameSpace is a nice decoration feature
const x1: number = MyNameSpace.x;
const x2: number = MyNameSpace.getX();
const objectOfSomeInterface: MyNameSpace.SomeInterface = {
    y: 1,
    z: 2,
};