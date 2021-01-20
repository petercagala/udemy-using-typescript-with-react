/**
 * Ked chces pouzivat len niektore properties z T
 */
type Pick1<T, Properties extends keyof T> = {
    [P in Properties]: T[P];
};

interface IMyProperties {
    prop1: boolean;
    prop2: string;
    prop3: string;
}

const myObject1_2: Pick1<IMyProperties, "prop2" | "prop3"> = {
    prop2: "Peter",
    prop3: "Katka"
};

// V tejto libke je mnoho generickych typov, ako urobit nejaky predpisany typ Record, Exclude, Extract atd.
const myPerfectRecordObject: Record<string | number, number> =  {
    "prop1": 2,
    "prop2": 3,
    3: 4,
};