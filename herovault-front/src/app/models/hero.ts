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
    user: User;
    isAiGenerated: boolean;
    createdAt: Date;
    updatedAt: Date;
}

type __HeroComplexTypes = 'powerstats' | 'equipment' | 'abilities' | 'user'
type __PartialHeroComplexTypes = {
    powerstats?: Partial<Hero['powerstats']>;
    equipment?: PartialEquipment[];
    abilities?: PartialAbility[];
    user: PartialUser;
}
export type PartialHero = Omit<Partial<Hero>, __HeroComplexTypes>
    & __PartialHeroComplexTypes
