type Properties = 'propA' | 'propB';
type MyMappedType1<Properties extends string | number | symbol> = {
    [P in Properties]: boolean;
}

type MyNewType1 = MyMappedType1<Properties>;

const myObject1: MyNewType1 = {
    propA: true,
    propB: false,
};

// ************************************************
type MyMappedType2<T> = {
    [P in keyof T]: T[P];
}

type MyNewType2 = MyMappedType2<{a: boolean, b: string}>;

const myObject2: MyNewType2 = {
    a: true,
    b: "Katka",
};