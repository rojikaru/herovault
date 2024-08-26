import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { AbilityService } from './ability.service';
import { CreateAbilityInput } from './dto/create-ability.input';
import { UpdateAbilityInput } from './dto/update-ability.input';
import { AbilityType } from './entities/ability.entity';
import { PaginationArgs } from 'src/models/dto/pagination.args';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Permissions } from 'src/auths/permissions.decorator';
import { GqlAuthGuard } from 'src/auths/gql-auth.guard';

@Resolver(() => AbilityType)
export class AbilityResolver {
  constructor(private readonly abilityService: AbilityService) {}

  @Mutation(() => AbilityType)
  @UseGuards(GqlAuthGuard)
  @Permissions('create:ability')
  async createAbility(
    @Args('createAbilityInput') createAbilityInput: CreateAbilityInput,
  ) {
    return await this.abilityService.create(createAbilityInput);
  }

  @Query(() => [AbilityType], { name: 'abilities' })
  async findAll(@Args() args: PaginationArgs = new PaginationArgs(1, 10)) {
    return await this.abilityService.findAll(args);
  }

  @Query(() => AbilityType, { name: 'ability' })
  async findOne(@Args('id', { type: () => ID }) id: string) {
    return await this.abilityService.findOne(id);
  }

  @Mutation(() => AbilityType)
  @UseGuards(GqlAuthGuard)
  @Permissions('update:ability')
  async updateAbility(
    @Args('updateAbilityInput') updateAbilityInput: UpdateAbilityInput,
  ) {
    return await this.abilityService.update(
      updateAbilityInput.id,
      updateAbilityInput,
    );
  }

  @Mutation(() => AbilityType)
  @UseGuards(GqlAuthGuard)
  @Permissions('delete:ability')
  async removeAbility(@Args('id', { type: () => ID }) id: string) {
    return await this.abilityService.remove(id);
  }
}
