import {
  Resolver,
  Query,
  Mutation,
  Args,
  ID,
  ResolveField,
  Parent,
  Context,
} from '@nestjs/graphql';
import { HeroService } from './hero.service';
import { HeroType } from './entities/hero.entity';
import { CreateHeroInput } from './dto/create-hero.input';
import { UpdateHeroInput } from './dto/update-hero.input';
import { PaginationArgs } from 'src/models/dto/pagination.args';
import { EquipmentType } from 'src/equipment/entities/equipment.entity';
import { AbilityType } from 'src/ability/entities/ability.entity';
import { Request, UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auths/gql-auth.guard';
import { Permissions } from 'src/auths/permissions.decorator';

@Resolver(() => HeroType)
export class HeroResolver {
  constructor(private readonly heroService: HeroService) {}

  @Mutation(() => HeroType)
  @UseGuards(GqlAuthGuard)
  @Permissions('create:hero')
  async createHero(@Args('createHeroInput') createHeroInput: CreateHeroInput) {
    return await this.heroService.create(createHeroInput);
  }

  @Query(() => [HeroType], { name: 'heroes' })
  async findAll(@Args() args: PaginationArgs = new PaginationArgs(1, 10)) {
    return await this.heroService.findAll(args);
  }

  @Query(() => HeroType, { name: 'hero' })
  async findOne(@Args('id', { type: () => ID }) id: string) {
    return await this.heroService.findOne(id);
  }

  @Mutation(() => HeroType)
  @UseGuards(GqlAuthGuard)
  @Permissions('update:hero')
  async updateHero(
    @Args('updateHeroInput') updateHeroInput: UpdateHeroInput,
    @Context() cnt,
  ) {
    // TODO: check if the user has the permission to update the hero
    // const item = await this.heroService.findOne(updateHeroInput.id);
    // if (item.user.id !== cnt.req.user.sub) {
    //   throw new Error('You are not allowed to update this hero');
    // }

    return await this.heroService.update(updateHeroInput.id, updateHeroInput);
  }

  @Mutation(() => HeroType)
  @UseGuards(GqlAuthGuard)
  @Permissions('delete:hero')
  async removeHero(@Args('id', { type: () => ID }) id: string) {
    return await this.heroService.remove(id);
  }

  @ResolveField(() => [EquipmentType])
  async equipment(@Parent() hero: HeroType) {
    return await this.heroService.getEquipment(hero.id);
  }

  @ResolveField(() => [AbilityType])
  async abilities(@Parent() hero: HeroType) {
    return await this.heroService.getAbilities(hero.id);
  }
}
