import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { EquipmentService } from './equipment.service';
import { CreateEquipmentInput } from './dto/create-equipment.input';
import { UpdateEquipmentInput } from './dto/update-equipment.input';
import { EquipmentType } from './entities/equipment.entity';
import { PaginationArgs } from 'src/dto/pagination.args';

@Resolver(() => EquipmentType)
export class EquipmentResolver {
  constructor(private readonly equipmentService: EquipmentService) {}

  @Mutation(() => EquipmentType)
  async createEquipment(
    @Args('createEquipmentInput') createEquipmentInput: CreateEquipmentInput,
  ) {
    return await this.equipmentService.create(createEquipmentInput);
  }

  @Query(() => [EquipmentType], { name: 'equipment' })
  async findAll(@Args() args: PaginationArgs = new PaginationArgs(1, 10)) {
    return await this.equipmentService.findAll(args);
  }

  @Query(() => EquipmentType, { name: 'equipment' })
  async findOne(@Args('id', { type: () => ID }) id: string) {
    return await this.equipmentService.findOne(id);
  }

  @Mutation(() => EquipmentType)
  async updateEquipment(
    @Args('updateEquipmentInput') updateEquipmentInput: UpdateEquipmentInput,
  ) {
    return await this.equipmentService.update(
      updateEquipmentInput.id,
      updateEquipmentInput,
    );
  }

  @Mutation(() => EquipmentType)
  async removeEquipment(@Args('id', { type: () => ID }) id: string) {
    return await this.equipmentService.remove(id);
  }
}
