import { Module } from '@nestjs/common';
import db_providers from './provider';

@Module({
    imports: [],
    controllers: [],
    providers: [...db_providers],
    exports: [...db_providers],
})
export class DatabaseModule {}
