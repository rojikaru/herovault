import { Injectable } from '@nestjs/common';
import { CreateAbilityInput } from './dto/create-ability.input';
import { UpdateAbilityInput } from './dto/update-ability.input';
import { InjectModel } from '@nestjs/mongoose';
import { Ability } from '../models/schema/ability.schema';
import { Model } from 'mongoose';
import { PaginationArgs } from 'src/models/dto/pagination.args';

@Injectable()
export class AbilityService {
  constructor(
    @InjectModel(Ability.name)
    private readonly abilityModel: Model<Ability>,
  ) {}

  async create(createAbilityInput: CreateAbilityInput) {
    return await this.abilityModel.create(createAbilityInput);
  }

  async findAll(args: PaginationArgs) {
    PaginationArgs.validate(args);
    const skip = (args.page - 1) * args.take;
    return await this.abilityModel.find().skip(skip).limit(args.take).exec();
  }

  async findOne(id: string) {
    return await this.abilityModel.findById(id).exec();
  }

  async update(id: string, updateAbilityInput: UpdateAbilityInput) {
    return await this.abilityModel
      .findByIdAndUpdate(id, updateAbilityInput, { new: true })
      .exec();
  }

  async remove(id: string) {
    return await this.abilityModel.findByIdAndDelete(id).exec();
  }
}
