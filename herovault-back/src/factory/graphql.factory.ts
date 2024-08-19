import { ApolloDriverConfig } from "@nestjs/apollo";
import { ConfigService } from "@nestjs/config";
import { join } from "node:path";
import constants from "src/constants";

export default function (configService: ConfigService)
: Omit<ApolloDriverConfig, "driver"> {
    const isNotProduction = configService
        .getOrThrow<string>(constants.environment) !== 'production';

    return {
        debug: isNotProduction,
        playground: isNotProduction,
        autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
        sortSchema: true,
    }
}
