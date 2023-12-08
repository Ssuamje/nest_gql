import { Module } from "@nestjs/common";
import { UsersResolver } from "./user.resolver";
import { UserService } from "./user.service";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "./domain/user.schema";
import { NicknameScalar } from "./domain/nickname.scalar";

@Module({
    // 해당 모듈에서 import하는 도큐먼트와 스키마를 정의한다.
    imports: [MongooseModule.forFeature([
        { name: User.name, schema: UserSchema }]),
    ],
    providers: [UsersResolver, UserService,
        NicknameScalar,
    ],
    exports: [UserService],
})
export class UserModule {}