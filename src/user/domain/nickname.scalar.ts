import { CustomScalar, Scalar } from "@nestjs/graphql";
import { Nickname } from "./nickname";

@Scalar("NicknameScalar", (type) => NicknameScalar)
export class NicknameScalar implements CustomScalar<string, Nickname> {
    description = "닉네임에 대한 스칼라";

    parseValue(value: string): Nickname {
        return new Nickname(value);
    }

    serialize(nickname: Nickname): string {
        return nickname.value;
    }

    parseLiteral(ast): Nickname {
        return new Nickname(ast.value);
    }
}