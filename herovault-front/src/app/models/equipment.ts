export declare class Equipment {
    id: string;
    name: string;
    description: string;
    type: string;
    impact: number;
    rarity: string;
    weight: number;
    createdAt: Date;
    updatedAt: Date;
}

export type PartialEquipment = Partial<Equipment>
