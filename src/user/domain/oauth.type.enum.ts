import { registerEnumType } from "@nestjs/graphql";

export enum OauthType {
    KAKAO = 'KAKAO',
    GOOGLE = 'GOOGLE',
    NAVER = 'NAVER',
    FORTY_TWO = 'FORTY_TWO',
}

registerEnumType(OauthType, {
    name: 'OauthType',
    description: 'Oauth Type',
});