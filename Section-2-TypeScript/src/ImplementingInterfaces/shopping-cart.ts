import {IOrder} from "./calculate-total-amount";

export class ShoppingCart implements IOrder {
    calculateTotal(): number {
        return 1000;
    }

}