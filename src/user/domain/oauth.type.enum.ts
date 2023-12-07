import { registerEnumType } from "@nestjs/graphql";

export enum OauthType {
    KAKAO = 'KAKAO',
    GOOGLE = 'GOOGLE',
    NAVER = 'NAVER',
    FORTY_TWO = 'FORTY_TWO',
}

registerEnumType(OauthType, {
    name: 'OauthType',
    description: '유저의 OAuth2 로그인 타입 열거 타입',
});