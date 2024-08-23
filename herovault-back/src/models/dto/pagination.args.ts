import { BadRequestException } from '@nestjs/common';
import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class PaginationArgs {
  @Field(() => Int, { nullable: true })
  page?: number;

  @Field(() => Int, { nullable: true })
  take?: number;

  constructor(page: number = 1, take: number = 10) {
    this.page = page;
    this.take = take;
    PaginationArgs.validate(this);
  }

  static validate(args: PaginationArgs): void {
    if (args.page < 1) {
      throw new BadRequestException('Page must be greater than 0');
    }
    if (args.take < 1) {
      throw new BadRequestException('Take must be greater than 0');
    }
    if (args.take > 100) {
      throw new BadRequestException('Take must be less than or equal to 100');
    }

    if (!args.page) args.page = 1;
    if (!args.take) args.take = 10;
  }
}
