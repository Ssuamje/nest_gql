import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'node:path/posix';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { NoteModule } from './note/note.module';
import { AuthModule } from './auth/auth.module';

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
    MongooseModule.forRoot('mongodb://admin:1234@localhost:27017/nest?authSource=admin'),
    UserModule,
    NoteModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
