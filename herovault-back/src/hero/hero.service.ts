import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateHeroInput } from './dto/create-hero.input';
import { UpdateHeroInput } from './dto/update-hero.input';
import { Hero } from './entities/hero.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PaginationArgs } from 'src/dto/pagination.args';

@Injectable()
export class HeroService {
  constructor(
    @InjectModel(Hero.name)
    private readonly heroModel: Model<Hero>
  ) { }

  async create(createHeroInput: CreateHeroInput): Promise<Hero> {
    const newHero = await this.heroModel.create({
      ...createHeroInput,
      created_at: new Date().toUTCString(),
      updated_at: new Date().toUTCString(),
    });
    return newHero;
  }

  async findAll(args: PaginationArgs): Promise<Hero[]> {
    PaginationArgs.validate(args)
    
    const { page, take } = args;
    const skip = (page - 1) * take;
    
    return this.heroModel.find().skip(skip).limit(take).exec();
  }

  async findOne(id: string): Promise<Hero> {
    const hero = await this.heroModel.findById(id).exec()
    if (!hero) {
      throw new NotFoundException(`Hero with id ${id} not found`);
    }
    return hero;
  }

  async update(id: string, updateHeroInput: UpdateHeroInput): Promise<Hero> {
    const updatedHero = await this.heroModel.findByIdAndUpdate(id, {
      ...updateHeroInput,
      updated_at: new Date().toUTCString(),
    }, { new: true }).exec();
    if (!updatedHero) {
      throw new NotFoundException(`Hero with id ${id} not found`);
    }
    return updatedHero
  }

  async remove(id: string): Promise<Hero | null> {
    const deletedHero = await this.heroModel.findByIdAndDelete(id).exec();
    if (!deletedHero) {
      throw new NotFoundException(`Hero with id ${id} not found`);
    }
    return deletedHero
  }
}
