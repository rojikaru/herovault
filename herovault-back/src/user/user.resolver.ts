import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserType } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Resolver(() => UserType)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => UserType)
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return await this.userService.create(createUserInput);
  }

  @Query(() => [UserType], { name: 'user' })
  async findAll() {
    return await this.userService.findAll();
  }

  @Query(() => UserType, { name: 'user' })
  async findOne(@Args('id', { type: () => Int }) id: string) {
    return await this.userService.findOne(id);
  }

  @Mutation(() => UserType)
  async updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return await this.userService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation(() => UserType)
  async removeUser(@Args('id', { type: () => ID }) id: string) {
    return await this.userService.remove(id);
  }
}
