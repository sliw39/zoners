import { RollValue } from "../../common/dice/dice.model";
import { Item } from "../item.model";

export interface Equipment extends Item {
    isolation: RollValue;
    resistance: number;
    durability: RollValue;

    set: string;
    type: string;
}