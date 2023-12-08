import { Module } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { UserModule } from 'src/user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/user/domain/user.schema';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from './google.strategy';

@Module({
  controllers: [AuthController],
  imports: [MongooseModule.forFeature([
      { name: User.name, schema: UserSchema }]),
      UserModule,
      JwtModule.register({
          secret: "THIS-IS-SECRET-KEY",
          signOptions: { expiresIn: '300s' },
      }),
  ],
  providers: [UserService, GoogleStrategy],
  exports: [],
})
export class AuthModule {}
