import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { User, UserInputType } from "./user.schema";
import { UserService } from "./user.service";

@Resolver()
export class UsersResolver {
    constructor(private readonly userService: UserService) {}

    @Query(() => [User])
    async findAll() {
        try {
            return this.userService.findAll();
        } catch (error) {
            
        }
    }

    @Mutation(() => User)
    async createUser(@Args("input") user: UserInputType) {
        try {
            return await this.userService.createUser(user);
        } catch (error) {
            
        }
    }
}