import { Inject, Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { User, UserInputType } from "./domain/user.schema";
import { InjectModel } from "@nestjs/mongoose";
import { ApolloError } from "apollo-server-express";
import { MongoError, MongoServerError } from "typeorm";

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) 
        private userModel: Model<User>
    ) {}

    async findAllUsers(): Promise<User[]> {
        try {
            return this.userModel.find().exec();
        } catch (error) {
            
        }
    }

    async findById(id: string): Promise<User> {
        try {
            return this.userModel.findById(id).exec();
        } catch (error) {
            
        }
    }

    async createUser(userInput: UserInputType) {
        try {
            const {nickname, oauth_type} = userInput;
            
            const data = {
                nickname,
                oauth_type,
                created_at: new Date(),
            };

            const newUser = await this.userModel.create(data);
            
            return {
                _id: newUser._id,
                ...data
            };
        } catch (error) {
            if (error.name === "MongoServerError") {
                new ApolloError(error.message, "MONGO_SERVER_ERROR");
            }
        } 
    }
}