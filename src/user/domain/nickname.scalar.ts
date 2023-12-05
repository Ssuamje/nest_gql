import { CustomScalar, Scalar } from "@nestjs/graphql";
import { NicknameType } from "./nickname.type";

@Scalar("Nickname", (type) => Nickname)
export class Nickname implements CustomScalar<string, NicknameType> {
    description = "Nickname custom scalar type";

    parseValue(value: string): NicknameType {
        return new NicknameType(value);
    }

    serialize(nickname: NicknameType): string {
        return nickname.value;
    }

    parseLiteral(ast): NicknameType {
        return new NicknameType(ast.value);
    }
}