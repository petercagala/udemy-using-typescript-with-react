class Foo {
    foo: number;
    commonProp: string;


    constructor(foo: number, commonProp: string) {
        this.foo = foo;
        this.commonProp = commonProp;
    }
}

class Bar {
    bar: number;
    commonProp: string;


    constructor(bar: number, commonProp: string) {
        this.bar = bar;
        this.commonProp = commonProp;
    }
}

// instanceof vieme pouzit, ked je to objekt triedy
function fooBarFunction(obj: Foo | Bar) {
    if (obj instanceof Foo) {
        console.log(obj.foo);
    } else if (obj instanceof Bar) {
        console.log(obj.bar);
    }
}