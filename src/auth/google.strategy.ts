import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, Profile, VerifyCallback } from "passport-google-oauth20";

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            clientID: "CID",
            clientSecret: "CSCRT",
            callbackURL: "http://localhost:3000/auth/google/login/callback",
            scope: ["profile", "email"],
        });
    }

    async validate(accessToken: string, refreshToken: string, profile: Profile, done: VerifyCallback) {
        console.log("accessToken : ", accessToken);
        console.log("refreshToken : ", refreshToken);
        console.log("profile : ", profile);
        done(null, profile);
        console.log("this should be called after done");
    }
}