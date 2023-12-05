import { Inject, Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { User, UserInputType } from "./user.schema";

@Injectable()
export class UserService {
    constructor(
        @Inject("USER_MODEL")
        private readonly userModel: Model<User>
    ) {}

    async findAll(): Promise<User[]> {
        try {
            return this.userModel.find().exec();
        } catch (error) {
            
        }
    }

    async createUser(user: UserInputType) {
        try {
            const data = {...user, createdAt: new Date().toISOString()};
            const newUser = await this.userModel.create(data);
            return {
                uid: newUser._id,
                ...data
            };
        } catch (error) {
            
        }
    }
}