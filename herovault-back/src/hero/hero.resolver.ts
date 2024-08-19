import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { HeroService } from './hero.service';
import { Hero } from './entities/hero.entity';
import { CreateHeroInput } from './dto/create-hero.input';
import { UpdateHeroInput } from './dto/update-hero.input';
import { Logger } from '@nestjs/common';
import { PaginationArgs } from 'src/dto/pagination.args';

@Resolver(() => Hero)
export class HeroResolver {
  private readonly logger: Logger;

  constructor(private readonly heroService: HeroService) {
    this.logger = new Logger(HeroResolver.name);
    this.logger.log('HeroResolver instantiated');
  }

  @Mutation(() => Hero)
  async createHero(@Args('createHeroInput') createHeroInput: CreateHeroInput) {
    const hero = await this.heroService.create(createHeroInput);
    this.logger.log(`Created hero with id ${hero.id}`);
    return hero;
  }

  @Query(() => [Hero], { name: 'heroes' })
  async findAll(@Args() args: PaginationArgs = new PaginationArgs(1, 10)) {
    const heroes = await this.heroService.findAll(args);
    this.logger.log(`Retrieved ${heroes.length} heroes`);
    return heroes;
  }

  @Query(() => Hero, { name: 'hero' })
  async findOne(@Args('id', { type: () => ID }) id: string) {
    const hero = await this.heroService.findOne(id);
    this.logger.log(`Retrieved hero with id ${id}`);
    return hero;
  }

  @Mutation(() => Hero)
  async updateHero(@Args('updateHeroInput') updateHeroInput: UpdateHeroInput) {
    const hero = await this.heroService.update(updateHeroInput.id, updateHeroInput);
    this.logger.log(`Updated hero with id ${hero.id}`);
    return hero;
  }

  @Mutation(() => Hero)
  async removeHero(@Args('id', { type: () => ID }) id: string) {
    const hero = await this.heroService.remove(id);
    this.logger.log(`Deleted hero with id ${id}`);
    return hero;
  }
}
