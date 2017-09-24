export type ItemType = "WEAPON"|"EQUIPMENT";

export interface Item {
    id: string;
    name: string;
    detail: string;

    weight: number;
    price: number;
}