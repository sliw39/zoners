import { Item, DynamicItemStat } from "../item.model";

export interface Misc extends Item {
    lines: DynamicItemStat[];
    blocks: DynamicItemStat[];
}