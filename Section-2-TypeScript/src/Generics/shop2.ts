interface ShoppingCard<ItemId, Item> {
    item: Item[];
    addItem(this: ShoppingCard<ItemId, Item>, item: Item): void; // this: ShoppingCard<ItemId, Item>, toto tam asi nemusi byt
    getItemById(this: ShoppingCard<ItemId, Item>, itemId: ItemId): Item | undefined;
}

interface MyItem {
    id: number;
    price: number;
}

const shoppingCart: ShoppingCard<number, MyItem> = {
    item: [],
    addItem(item: MyItem): void {
        this.item.push(item);
    },
    getItemById(itemId: number): MyItem | undefined {
        return this.item.find((value: MyItem): boolean => value.id === itemId);
    }
}