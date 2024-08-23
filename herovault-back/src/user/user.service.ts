import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../models/schema/user.schema';
import { Model } from 'mongoose';
import { PaginationArgs } from 'src/models/dto/pagination.args';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
  ) { }

  async create(createUserInput: CreateUserInput) {
    return await this.userModel.create({
      ...createUserInput,
      createdAt: new Date().toUTCString(),
      updatedAt: new Date().toUTCString(),
    });
  }

  async findAll(args: PaginationArgs) {
    PaginationArgs.validate(args);
    const skip = (args.page - 1) * args.take;
    return await this.userModel.find().skip(skip).limit(args.take).exec();
  }

  async findOne(id: string) {
    return await this.userModel.findById(id).exec();
  }

  async findOrCreate(createUserInput: CreateUserInput) { 
    const user = await this.findByEmail(createUserInput.email)
      ?? await this.findByUsername(createUserInput.username);
    if (user) {
      return user;
    }
    return await this.create(createUserInput);
  }

  async findByUsername(username: string) {
    return await this.userModel.findOne({ username }).exec();
  }

  async findByEmail(email: string) {
    return await this.userModel.findOne({ email }).exec();
  }

  async update(id: string, updateUserInput: UpdateUserInput) {
    return await this.userModel.findByIdAndUpdate(
      id,
      {
        ...updateUserInput,
        updatedAt: new Date().toUTCString(),
      },
      { new: true }
    ).exec();
  }

  async remove(id: string) {
    return await this.userModel.findByIdAndDelete(id).exec();
  }
}
