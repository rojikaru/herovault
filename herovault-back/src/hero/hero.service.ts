import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateHeroInput } from './dto/create-hero.input';
import { UpdateHeroInput } from './dto/update-hero.input';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PaginationArgs } from 'src/models/dto/pagination.args';
import { Ability } from 'src/models/schema/ability.schema';
import { Equipment } from 'src/models/schema/equipment.schema';
import { Hero } from 'src/models/schema/hero.schema';

@Injectable()
export class HeroService {
  constructor(
    @InjectModel(Hero.name)
    private readonly heroModel: Model<Hero>,
    @InjectModel(Ability.name)
    private readonly abilityModel: Model<Ability>,
    @InjectModel(Equipment.name)
    private readonly equipmentModel: Model<Equipment>,
  ) { }

  async create(createHeroInput: CreateHeroInput): Promise<Hero> {
    const newHero = new this.heroModel({
      ...createHeroInput,
      createdAt: new Date().toUTCString(),
      updatedAt: new Date().toUTCString(),
    });
    if (createHeroInput.abilityIds) {
      const abilities = await this.abilityModel
        .find({ _id: { $in: createHeroInput.abilityIds } })
        .exec();
      newHero.abilities = abilities;
    }
    if (createHeroInput.equipmentIds) {
      const equipment = await this.equipmentModel
        .find({ _id: { $in: createHeroInput.equipmentIds } })
        .exec();
      newHero.equipment = equipment;
    }
    return await newHero.save();
  }

  async findAll(args: PaginationArgs): Promise<Hero[]> {
    PaginationArgs.validate(args);

    const { page, take } = args;
    const skip = (page - 1) * take;

    return this.heroModel.find().skip(skip).limit(take).exec();
  }

  async findOne(id: string): Promise<Hero> {
    const hero = await this.heroModel.findById(id).exec();
    if (!hero) {
      throw new NotFoundException(`Hero with id ${id} not found`);
    }
    return hero;
  }

  async update(
    id: string,
    updateHeroInput: UpdateHeroInput,
  ): Promise<Hero> {
    const updatedHero = new this.heroModel({
      ...updateHeroInput,
      updatedAt: new Date().toUTCString(),
    });
    if (updateHeroInput.abilityIds) {
      const abilities = await this.abilityModel
        .find({ _id: { $in: updateHeroInput.abilityIds } })
        .exec();
      updatedHero.abilities = abilities;
    }
    if (updateHeroInput.equipmentIds) {
      const equipment = await this.equipmentModel
        .find({ _id: { $in: updateHeroInput.equipmentIds } })
        .exec();
      updatedHero.equipment = equipment;
    }
    return await this.heroModel.findByIdAndUpdate(
      id,
      updatedHero,
      { new: true },
    ).exec()
  }

  async remove(id: string): Promise<Hero | null> {
    const deletedHero = await this.heroModel.findByIdAndDelete(id).exec();
    if (!deletedHero) {
      throw new NotFoundException(`Hero with id ${id} not found`);
    }
    return deletedHero;
  }

  async getEquipment(heroId: string): Promise<Equipment[]> {
    return await this.equipmentModel.find({ heroId }).exec();
  }

  async getAbilities(heroId: string): Promise<Ability[]> {
    return await this.abilityModel.find({ heroId }).exec();
  }
}
