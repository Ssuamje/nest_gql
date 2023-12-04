import { Query, Resolver } from "@nestjs/graphql";

@Resolver()
export class ExampleResolver {
    @Query(() => String)
    async hello() {
        return 'hello';
    }
}