import {IOrder} from "./calculate-total-amount";

export class Order implements IOrder {
    calculateTotal(): number {
        return 500;
    }

}