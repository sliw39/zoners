import { Artifact } from "../assets/artifact/artifact.model";

export interface Character {
    id: string;

    name: string;
    age: string;
    gender: string;
    picture: string;

    nationality: string;
    background: string;

    skills: Skill[];
    behavior: string[];
    wounds: Wound[];

    money: number;

    endurance: Status;
    illness: Status;
    madness: Status;
    contamination: Status;

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

export interface Status {
    tier0: number;
    tier1: number;
    tier2: number;
    tier3: number;
}