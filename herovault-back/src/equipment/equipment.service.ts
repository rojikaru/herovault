import { Injectable } from '@nestjs/common';
import { CreateEquipmentInput } from './dto/create-equipment.input';
import { UpdateEquipmentInput } from './dto/update-equipment.input';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Equipment } from './entities/equipment.schema';
import { PaginationArgs } from 'src/dto/pagination.args';

@Injectable()
export class EquipmentService {
  constructor(
    @InjectModel(Equipment.name)
    private readonly equipmentModel: Model<Equipment>,
  ) {}

  async create(createEquipmentInput: CreateEquipmentInput) {
    return await this.equipmentModel.create(createEquipmentInput);
  }

  async findAll(args: PaginationArgs) {
    PaginationArgs.validate(args);
    const skip = (args.page - 1) * args.take;
    return await this.equipmentModel.find().skip(skip).limit(args.take).exec();
  }

  async findOne(id: string) {
    return await this.equipmentModel.findById(id).exec();
  }

  async update(id: string, updateEquipmentInput: UpdateEquipmentInput) {
    return await this.equipmentModel
      .findByIdAndUpdate(id, updateEquipmentInput, { new: true })
      .exec();
  }

  async remove(id: string) {
    return await this.equipmentModel.findByIdAndDelete(id).exec();
  }
}
