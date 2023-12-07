import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { UserInputType, UserType } from "./domain/user.schema";
import { UserService } from "./user.service";
import { UseFilters } from "@nestjs/common";
import { HttpExceptionFilter } from "src/filter/http-exception.filter";

@UseFilters(HttpExceptionFilter)
@Resolver()
export class UsersResolver {
    constructor(private readonly userService: UserService) {}

    @Query(() => [UserType])
    async findAllUsers() {
        return this.userService.findAllUsers();
    }

    @Mutation(() => UserType)
    async createUser(@Args("input") user: UserInputType) {
        return await this.userService.createUser(user);
    }
}