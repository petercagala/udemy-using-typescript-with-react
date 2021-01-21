enum Vegetables {
    Tomato = "tomato",
    Onion = "onion",
}

namespace Vegetables {
    export function makeSalad(): string {
        return `${Vegetables.Tomato} and ${Vegetables.Onion}`
    }
}

const salad: string = Vegetables.makeSalad();