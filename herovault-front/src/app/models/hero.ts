import { Ability } from "./ability";
import { Equipment } from "./equipment";

export declare class Hero {
    id: string;
    name: string;
    description: string;
    images: string[];
    race: string;
    alignment: string;
    class: string[];
    background?: string;
    abilities: Ability[];
    powerstats: {
        strength: number;
        dexterity: number;
        constitution: number;
        intelligence: number;
        wisdom: number;
        charisma: number;
    };
    equipment: Equipment[];
    remarks: string[];
    user: string;
    isAiGenerated: boolean;
    createdAt: Date;
    updatedAt: Date;
}
