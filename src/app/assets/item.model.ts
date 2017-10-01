import { RollValue } from "../common/dice/dice.model";

export type ItemType = "WEAPON" | "EQUIPMENT" | "MELEE" | "MISC" | "ARTIFACT";

export interface Item {
    id: string;
    name: string;
    detail: string;

    weight: number;
    price: number;
}

export interface DynamicItemStat {
    type: "DOT" | "ROLLVALUE" | "STRING";
    label: string;
    data: number | string | RollValue;
}