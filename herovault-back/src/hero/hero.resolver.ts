import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { HeroService } from './hero.service';
import { Hero } from './entities/hero.entity';
import { CreateHeroInput } from './dto/create-hero.input';
import { UpdateHeroInput } from './dto/update-hero.input';
import { Logger } from '@nestjs/common';

@Resolver(() => Hero)
export class HeroResolver {
  private readonly logger: Logger;

  constructor(private readonly heroService: HeroService) {
    this.logger = new Logger(HeroResolver.name);
  }

  @Mutation(() => Hero)
  async createHero(@Args('createHeroInput') createHeroInput: CreateHeroInput) {
    const hero = await this.heroService.create(createHeroInput);
    return hero;
  }

  @Query(() => [Hero], { name: 'heroes' })
  async findAll() {
    const heroes = await this.heroService.findAll();
    this.logger.log(`Retrieved ${heroes.length} heroes\n${heroes}`);
    return heroes;
  }

  @Query(() => Hero, { name: 'hero' })
  async findOne(@Args('id', { type: () => ID }) id: string) {
    return await this.heroService.findOne(id);
  }

  @Mutation(() => Hero)
  async updateHero(@Args('updateHeroInput') updateHeroInput: UpdateHeroInput) {
    return await this.heroService.update(updateHeroInput.id, updateHeroInput);
  }

  @Mutation(() => Hero)
  async removeHero(@Args('id', { type: () => ID }) id: string) {
    return await this.heroService.remove(id);
  }
}
