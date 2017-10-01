import { Item, DynamicItemStat } from "../item.model";

export interface Artifact extends Item {
    lines: DynamicItemStat[];
    blocks: DynamicItemStat[];
}