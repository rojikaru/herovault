export declare class Ability {
    id: string;
    name: string;
    description: string;
    type: string;
    value: number;
    createdAt: Date;
    updatedAt: Date;
}

export type PartialAbility = Partial<Ability>
