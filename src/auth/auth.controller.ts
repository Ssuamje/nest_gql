import { Body, Controller, Get, Post, Req, Request, RequestMapping, Res, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { GoogleAuthGuard } from "./google.guard";


@Controller("auth")
export class AuthController {
    constructor(
    ) {}    

    @Get("google/login")
    @UseGuards(AuthGuard('google'))
    async googleLogin() {
        return {msg : "google login"};
    }

    @Get("google/login/callback")
    @UseGuards(AuthGuard('google'))
    async googleLoginCallback(@Req() req, @Res() res) {
        // const jwt = await 
        // 여기에 인증 완료 로직 및 토큰 심어주기
        return {msg : "google login callback"};
    }
}