export interface IOrder {
    calculateTotal(): number;
}

export function calculateTotalAmount(order: IOrder): number {
    let total = order.calculateTotal();

    const discount = total * .1;
    total -= discount;

    const tax = total * .2;
    total += tax;

    return total;
}