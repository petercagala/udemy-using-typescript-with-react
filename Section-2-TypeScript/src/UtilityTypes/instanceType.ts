type Constructable<ClassInstance> = new (...args: any[]) => ClassInstance;

/**
 * Toto je super zaujimave, lebo parameter base nieje objekt, ale typ a tato funkcia vyraba tiez nie objekt,
 * ale typ. V podstate classObjekt
 * @param base
 */
function deletable<BaseClass extends Constructable<{}>>(base: BaseClass) {
    return class extends base {
        deleted: boolean | undefined;

        delete() {};
    }
}

class Car {
    constructor(public name: string) {}
}

class User {
    constructor(public name: string) {}
}

const DeletableCar = deletable(Car);
const DeletableUser = deletable(User);

type DeletableCarType = InstanceType<typeof DeletableCar>;
type DeletableUserType = InstanceType<typeof DeletableUser>;

class Profile {
    car: DeletableCarType;
    user: DeletableUserType;


    constructor(car: DeletableCarType, user: DeletableUserType) {
        this.car = car;
        this.user = user;
    }
}

const profile: Profile = new Profile(new DeletableCar("Skoda"), new DeletableUser("Peter"));