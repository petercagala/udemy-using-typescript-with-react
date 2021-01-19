interface MyObject {
    sayHello(): string;
}

interface MyObjectThis {
    helloWorld(): string;
}

//*********************
// https://www.typescriptlang.org/docs/handbook/utility-types.html#thistypetype

type ObjectDescriptor<D, M> = {
    data?: D;
    methods?: M & ThisType<D & M>; // Type of 'this' in methods is D & M
};

function makeObject<D, M>(desc: ObjectDescriptor<D, M>): D & M {
    let data: object = desc.data || {};
    let methods: object = desc.methods || {};
    return { ...data, ...methods } as D & M;
}

let obj = makeObject({
    data: { x: 0, y: 0 },
    methods: {
        moveBy(dx: number, dy: number) {
            this.x += dx; // Strongly typed this
            this.y += dy; // Strongly typed this
        },
        methodA(): void {
            console.log(this.x);
        },
    },
});



obj.x = 10;
obj.y = 20;
obj.moveBy(5, 5);
obj.methodA();