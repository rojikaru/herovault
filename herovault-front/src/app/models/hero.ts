import { Ability, PartialAbility } from "./ability";
import { Equipment, PartialEquipment } from "./equipment";
import { PartialUser, User } from "./user";

export declare class Hero {
    id: string;
    name: string;
    description: string;
    images: string[];
    race: string;
    alignment: string;
    class: string[];
    background?: string | null;
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
    user: User;
    isAiGenerated: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export type PartialHero = Omit<
    Partial<Hero>,
    'powerstats' | 'equipment' | 'abilities' | 'user'
> & {
    powerstats?: Partial<Hero['powerstats']>;
    equipment?: PartialEquipment[];
    abilities?: PartialAbility[];
    user: PartialUser;
}

export type ChangeHero = Omit<
    Hero,
    'id' | 'user' | 'isAiGenerated' | 'createdAt' | 'updatedAt'
>
export const defaultHeroChangeInitValues: ChangeHero = {
    name: '',
    description: '',
    images: [],
    race: '',
    alignment: '',
    class: [],
    background: null,
    abilities: [],
    powerstats: {
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 0,
    },
    equipment: [],
    remarks: [],
}
