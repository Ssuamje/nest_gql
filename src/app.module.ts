import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ExampleModule } from './example/example.module';
import { join } from 'node:path/posix';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      /* 테스팅 */
      playground: true,

      /* graphQL 스키마 타입을 동적으로 컴파일링하는 옵션 */
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      // typePaths: ['./**/*.graphql'],
      // definitions: {
      //   path: join(process.cwd(), 'src/graphql.ts'),
      //   outputAs: 'class',
      // },
    }),
    ExampleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
