interface IA {
    a: number;
}

interface IB {
    b: number;
}

interface IC {
    c: number;
}

// IA & IB intersection type, merging multiple type together
function X(obj: IA & IB & IC): number {
    return obj.a + obj.b + obj.c;
}

function combineObjects<ObjA extends IA, ObjB extends IB>(objA: ObjA, objB: ObjB): ObjA & ObjB {
    return {...objA, ...objB};
}

const objA: IA = {
    a: 1,
}

const objB: IB = {
    b: 2,
}

const resultObj: IA & IB = combineObjects(objA, objB);
const resultNumber: number = resultObj.a + resultObj.b;