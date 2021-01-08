class Robot {
    // # character means, it's a private field
    // proste pouzivaj # namiesto private, lebo ked sa kod skompiluje do javascriptu, aj tak bude  ten field pristupny,
    // napriek tomu ze je private
    #name: string;

    constructor(name: string) {
        this.#name = name;
    }
}

class AdvancedRobot extends Robot {
    getName(): string {
        // we cant's access private field form inherited class
        // return this.name;
        return "";
    }
}