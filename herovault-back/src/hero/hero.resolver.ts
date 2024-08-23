import { Resolver, Query, Mutation, Args, ID, ResolveField, Parent } from '@nestjs/graphql';
import { HeroService } from './hero.service';
import { HeroType } from './entities/hero.entity';
import { CreateHeroInput } from './dto/create-hero.input';
import { UpdateHeroInput } from './dto/update-hero.input';
import { PaginationArgs } from 'src/models/dto/pagination.args';
import { EquipmentType } from 'src/equipment/entities/equipment.entity';
import { AbilityType } from 'src/ability/entities/ability.entity';

@Resolver(() => HeroType)
export class HeroResolver {
  constructor(private readonly heroService: HeroService) {}

  @Mutation(() => HeroType)
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
  async updateHero(@Args('updateHeroInput') updateHeroInput: UpdateHeroInput) {
    return await this.heroService.update(updateHeroInput.id, updateHeroInput);
  }

  @Mutation(() => HeroType)
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
