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

interface IMappedType2 {
    myProperty1: boolean;
    myProperty2: string;
    // readonly myProperty1?: boolean | null;
    // readonly myProperty2?: string | null;
}

// alebo
// type MyNewType2 = MyMappedType2<{a: boolean; b: string}>;
type MyNewType2 = MyMappedType2<IMappedType2>;

const myObject2: MyNewType2 = {
    myProperty1: true,
    myProperty2: "Katka",
};

// alebo uplne piramociaro
const myObject3: MyMappedType2<IMappedType2> = {
    myProperty1: true,
    myProperty2: "Katka",
};