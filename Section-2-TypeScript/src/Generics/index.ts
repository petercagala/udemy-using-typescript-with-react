// Generic function
function genericFunction<T>(x: T): T {
    return x;
}

const genericArrowFunction = <T>(x: T): T => {
    return x;
};

// Generic interface
interface GenericInterface<T> {
    (a: T): T;
    someProp: T;
}

interface GenericInterface<T> {
    <U>(a: U): U;
    someProp: T;
}

// Generic Class
// We can't use generic parameters in static attributes and methods
class GenericClass<P> {
    constructor(public props: P) {

    }

    getProps(): P {
        return this.props;
    }

    // Static method can not reference to static class parameters
    // static A: P;
    // static someStaticMethod()
}