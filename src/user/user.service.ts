import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { User, UserInputType } from "./user.schema";
import { InjectModel } from "@nestjs/mongoose";
import { ApolloError } from "apollo-server-express";

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
            const data = {
                ...user, 
                created_at: new Date(),
            };

            const newUser = await this.userModel.create(data);
            
            return {
                uid: newUser._id,
                ...data
            };
        } catch (error) {
            new ApolloError(error.message);
        }
    }
}