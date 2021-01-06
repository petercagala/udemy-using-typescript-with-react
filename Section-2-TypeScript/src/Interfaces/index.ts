interface A {
    someProp: number;
}

interface B {
    readonly  someProp: number;
    // otherProp: number;
}

let a: A = {
  someProp: 1,
};

let b: B = a;
// b.someProp = 2; // in readonly mode, we can not modify property
a.someProp = 13;

// Index Signature
export interface IIndexSignatureInterface1 {
    property1: number,
    [key: string] : number, // the type of key property should be the same as property1
}

export interface IIndexSignatureInterface2 {
    property1: {[P in keyof IPropertyNames]: string},
    [key: string] : {[P in keyof IPropertyNames]: string},
}

export interface IPropertyNames{
    car: string
    cat: string;
    train: string;
}
// Call Signature
export interface ISum {
    sumCalculate: (a: number, b: number) => number;
    prop1: string;
}
