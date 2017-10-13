import { Item } from "../item.model";
import { RollValue } from "../../common/dice/dice.model";

interface MeleeWeaponAttribute {
    attack: RollValue;
    defense: RollValue;
}
export interface MeleeWeapon extends Item {
    durability: number;

    thrust: MeleeWeaponAttribute;
    smash: MeleeWeaponAttribute;
    slash: MeleeWeaponAttribute;

    handling: number;
    power: RollValue;
}