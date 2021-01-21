type AvaliableDrinks = 'Coffee' | 'Tea' | 'OrangeJuice' | 'Lemonade';

let johnDrinks: AvaliableDrinks;
johnDrinks = 'Coffee';

type DrinksJaneDoesnLike = 'Coffee' | 'OrangeJuice';
type DrinksJaneLikes = 'Tea' | 'Lemonade' | 'Mockito';

let janeDrinks1: Exclude<AvaliableDrinks, DrinksJaneDoesnLike>;
janeDrinks1 = 'Tea';

let janeDrinks2: Extract<AvaliableDrinks, DrinksJaneLikes>;
janeDrinks2 = 'Lemonade';