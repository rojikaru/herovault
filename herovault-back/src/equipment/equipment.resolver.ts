import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { EquipmentService } from './equipment.service';
import { CreateEquipmentInput } from './dto/create-equipment.input';
import { UpdateEquipmentInput } from './dto/update-equipment.input';
import { EquipmentType } from './entities/equipment.entity';
import { PaginationArgs } from 'src/models/dto/pagination.args';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auths/gql-auth.guard';
import { Permissions } from 'src/auths/permissions.decorator';

@Resolver(() => EquipmentType)
export class EquipmentResolver {
  constructor(private readonly equipmentService: EquipmentService) {}

  @Mutation(() => EquipmentType)
  @UseGuards(GqlAuthGuard)
  @Permissions('create:equipment')
  async createEquipment(
    @Args('createEquipmentInput') createEquipmentInput: CreateEquipmentInput,
  ) {
    return await this.equipmentService.create(createEquipmentInput);
  }

  @Query(() => [EquipmentType], { name: 'equipments' })
  async findAll(@Args() args: PaginationArgs = new PaginationArgs(1, 10)) {
    return await this.equipmentService.findAll(args);
  }

  @Query(() => EquipmentType, { name: 'equipment' })
  async findOne(@Args('id', { type: () => ID }) id: string) {
    return await this.equipmentService.findOne(id);
  }

  @Mutation(() => EquipmentType)
  @UseGuards(GqlAuthGuard)
  @Permissions('update:equipment')
  async updateEquipment(
    @Args('updateEquipmentInput') updateEquipmentInput: UpdateEquipmentInput,
  ) {
    return await this.equipmentService.update(
      updateEquipmentInput.id,
      updateEquipmentInput,
    );
  }

  @Mutation(() => EquipmentType)
  @UseGuards(GqlAuthGuard)
  @Permissions('delete:equipment')
  async removeEquipment(@Args('id', { type: () => ID }) id: string) {
    return await this.equipmentService.remove(id);
  }
}
