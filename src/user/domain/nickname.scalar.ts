import { CustomScalar, Scalar } from "@nestjs/graphql";

@Scalar("Nickname", (type) => Nickname)
export class Nickname implements CustomScalar<string, string> {
    description = "Nickname custom scalar type";

    parseValue(value: string): string {
        return value;
    }

    serialize(value: string): string {
        return value;
    }

    parseLiteral(ast): string {
        return ast.value;
    }
}