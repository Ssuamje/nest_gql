import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { UserInputType, UserType } from "./domain/user.schema";
import { UserService } from "./user.service";

@Resolver()
export class UsersResolver {
    constructor(private readonly userService: UserService) {}

    @Query(() => [UserType])
    async findAllUsers() {
        try {
            return this.userService.findAllUsers();
        } catch (error) {
            
        }
    }

    @Mutation(() => UserType)
    async createUser(@Args("input") user: UserInputType) {
        try {
            return await this.userService.createUser(user);
        } catch (error) {
            
        }
    }
}