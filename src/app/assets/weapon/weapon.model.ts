import { RollValue } from "../../common/dice/dice.model";
import { Item } from "../item.model";

export interface Weapon extends Item {
    ammo: number;
    ammotype: string;
    power: RollValue;
    handling: number;

    accuracy: Accuracy;
}

export interface Accuracy {
    veryshort: RollValue;
    short: RollValue;
    medium: RollValue;
    long: RollValue;
    verylong: RollValue;
}