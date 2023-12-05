import { Inject, Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { User, UserInputType } from "./user.schema";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) 
        private userModel: Model<User>
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