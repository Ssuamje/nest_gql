import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, Profile } from "passport-google-oauth20";

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            clientID: "GOOGLE_CLIENT_ID",
            clientSecret: "GOOGLE_CLIENT_SECRET",
            callbackURL: "http://localhost:3000/auth/google/callback",
            passReqToCallback: true,
            scope: ["profile", "email"],
        });
    }

    async validate(accessToken: string, refreshToken: string, profile: Profile) {
        console.log(`accessToken: ${accessToken}`);
        console.log(`refreshToken: ${refreshToken}`);
        console.log(`profile: ${JSON.stringify(profile)}`);
        return profile;
    }
}