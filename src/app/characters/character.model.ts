import { Artifact } from "../assets/artifact/artifact.model";

export interface Character {
    name: string;
    age: string;
    gender: string;

    nationality: string;
    background: string;

    skills: Skill[];
    behavior: string[];

    money: number;

    endurance: number;
    illness: number;
    madness: number;
    contamination: number;

    artifacts: string[];
    weapons: string[];
    equipments: string[];

}

export interface Skill {
    name: string;
    value: number;
}