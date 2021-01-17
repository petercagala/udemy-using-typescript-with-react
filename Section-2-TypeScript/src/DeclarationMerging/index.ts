///////////////
interface Cart {
    calculateTotalNumber(): number;
}
///////////////

interface Cart {
    x: number;

}

interface Cart {
    calculateTotalNumber(options: {discountCode: number}): number;
}

// Merging all 3 definitions with the same name in the Cart interface
let myCard: Cart = {
    x: 1,
    calculateTotalNumber(options?: {discountCode: number} ): number {
        if (options && options.discountCode) {
            // apply discount implementation
        }
        return 1;
    }
}