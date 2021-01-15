export interface IAnimal {
    name: string;
    group: string | undefined;

    setGroup(group: string): void;
}

export class Cat implements IAnimal {
    name: string;
    group: string | undefined;

    constructor(name: string) {
        this.name = name;
    }

    setGroup(group: string): void {
        this.group = group;
    }
}

export class Dog implements IAnimal {
    name: string;
    group: string | undefined;

    constructor(name: string) {
        this.name = name;
    }

    setGroup(group: string): void {
        this.group = group;
    }

    bark():void {
        console.log("This is unique bark method of the dog!")
    }
}

// static side interface // to je ako keby definicia class objektu
interface AnimalConstructor<T> {
    new  (name: string): T;
}

export function initializeAnimal<T extends IAnimal>(AnimalConstructor: AnimalConstructor<T>, name: string): T {
    const animal: T = new AnimalConstructor(name);
    animal.setGroup("nammals");
    return animal;
}