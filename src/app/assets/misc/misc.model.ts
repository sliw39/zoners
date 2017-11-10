import { Item, DynamicItemStat } from "../item.model";

export interface Misc extends Item {
    category: string;

    lines: DynamicItemStat[];
    blocks: DynamicItemStat[];
}