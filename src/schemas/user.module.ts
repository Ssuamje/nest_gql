import { Module } from "@nestjs/common";
import { UsersResolver } from "./user.resolver";
import { UserService } from "./user.service";
import { DatabaseModule } from "src/database/database.module";
import { UsersProviders } from "./user.provider";

@Module({
    imports: [DatabaseModule],
    providers: [UsersResolver, UserService, ...UsersProviders],
    exports: [UserService],
})
export class UserModule {}