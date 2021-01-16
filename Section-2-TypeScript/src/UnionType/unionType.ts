interface Dog {
    bark(): void;
    walk(): void;
}

interface Cat {
    meow(): void;
    walk(): void;
}

function isDog(pet: Dog | Cat): pet is Dog {
    return (<Dog>pet).bark() !== undefined;
}

function isCat(pet: Dog | Cat): pet is Cat {
    return (<Cat>pet).meow() !== undefined;
}

function callMyPet(pet: Dog | Cat) {
    pet.walk();

    if (isDog(pet)) {
        // (<Dog>pet).bark();
        pet.bark();
    } else if (isCat(pet)) {
        // (<Cat>pet).meow();
        pet.meow();
    }
}