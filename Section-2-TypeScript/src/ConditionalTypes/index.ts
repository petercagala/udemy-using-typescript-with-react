// type SomeType = "string";
type SomeType = number;
type ConditionalType = SomeType extends string ? string : null;

function someFunction2<T>(param: T): (someArg: T extends boolean ? 'TypeA' : 'TypeB') => void {
    const someOtherFunction = (someArg: T extends boolean ? 'TypeA' : 'TypeB'): void => {
        const a: 'TypeA' | 'TypeB' = someArg;
    };
    return someOtherFunction;
}

someFunction2(true)("TypeA");
someFunction2(3)("TypeB");

// **********************************************************
// never is type, which never happen
type StringOrNot<T> = T extends string ? string : never;

// it is string | number
type AUnion = string | number | never;


// type Exclude<T, U> = T extends U ? never : T;
/**
 * each type of T compare with whole type 'a' | 'b'
 * 'a' extends 'a' | 'b' ? never : 'a' => never .........a mozem priradit rodicovi a takze true
 * 'b' extends 'a' | 'b' ? never : 'b' => never
 * 'c' extends 'a' | 'b' ? never : 'c' => c
 * 'd' extends 'a' | 'b' ? never : 'd' => d
 */
type ResultType = Exclude<'a'| 'b'| 'c' | 'd', 'a' | 'b'>;

type MyType1<T> = T extends number | string ? T : never;
type MyResults1 = MyType1<number | string | boolean>;

// **************************************
type InferSomething1<T> = T extends infer U ? U : any;
type Infer1 = InferSomething1<"EDocumentType.Download">;

type InferSomething2<T> = T extends {a: infer A; b: infer B} ? A & B : any;
type Infer2 = InferSomething2<{a : {someAProp: 1}, b: {someBProp: "bPropValue"}}>;
const myInferObject: Infer2 = {someAProp: 1, someBProp: "bPropValue"};




