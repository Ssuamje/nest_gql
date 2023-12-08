import { Body, Controller, Get, Post, Request, RequestMapping, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { GoogleAuthGuard } from "./google.guard";


@Controller("auth")
export class AuthController {
    constructor(
    ) {}    

    @Get("google/login")
    @UseGuards(GoogleAuthGuard)
    async googleLogin() {
        return {msg : "google login"};
    }

    @Get("google/login/callback")
    @UseGuards(GoogleAuthGuard)
    async googleLoginCallback() {
        return {msg : "google login callback"};
    }
}