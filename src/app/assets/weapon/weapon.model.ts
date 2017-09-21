import { RollValue } from "../../common/dice/dice.model";

export interface Weapon {
    id: number;
    name: string;
    detail: string;

    weight: number;
    ammo: number;
    ammotype: string;
    power: RollValue;
    handling: number;

    accuracy: Accuracy;

    price: number;
}

export interface Accuracy {
    veryshort: RollValue;
    short: RollValue;
    medium: RollValue;
    long: RollValue;
    verylong: RollValue;
}