interface Expirable {
    expiryDate: Date;
}

interface ChocolateCake extends Expirable {}

interface VanillaCake extends Expirable {}

interface GetExpiredItemsFunctions {
    <T extends Expirable>(items: T[]): T[];
}

const getExpiredItems: GetExpiredItemsFunctions = <T extends Expirable>(items: T[]): T[] => {
    const currentDate: number = new Date().getTime();
    return  items.filter((value: T): boolean => {
        return value.expiryDate.getTime() < currentDate;
    })
}

const chocolateCake: ChocolateCake[] = [{expiryDate: new Date()}]
const vanillaCake: VanillaCake[] = [{expiryDate: new Date()}]

const expirableChocolateCake: ChocolateCake[] = getExpiredItems<ChocolateCake>(chocolateCake);
const expirableVanillaCake: VanillaCake[] = getExpiredItems<VanillaCake>(vanillaCake);