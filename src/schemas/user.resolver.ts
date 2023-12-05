import { Query, Resolver } from "@nestjs/graphql";
import { User } from "./user.schema";

@Resolver()
export class UsersResolver {
    constructor() {}

    @Query(() => [User])
    async findAll() {
        return [
            {uid:"1", email:"apple@test.com", displayName:"돌아온애쁠"},
            {uid:"2", email:"banan@test.com", displayName:"바나나반하나"}
          ]
        // catch문 필요. ApolloError를 위한 apollo-express 라이브러리가 필요한가?
    }
}