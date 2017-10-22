import { Artifact } from "../assets/artifact/artifact.model";

export interface Character {
    name: string;
    age: string;
    gender: string;
    picture: string;

    nationality: string;
    background: string;

    skills: Skill[];
    behavior: string[];
    wounds: Wound;

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

export interface Wound {
    intensity: "GREEN"|"ORANGE"|"RED"|"BLACK";
    cured: boolean;
    location: {
        x: number;
        y: number;
    }
    description: string;
}