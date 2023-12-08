import { Injectable, NotFoundException, UseFilters } from "@nestjs/common";
import { Model } from "mongoose";
import { User, UserInputType } from "./domain/user.schema";
import { InjectModel } from "@nestjs/mongoose";

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

    async findByOauthTypeAndId(oauth_type: string, oauth_id: string): Promise<User> {
        try {
            return this.userModel.findOne({oauth_type, oauth_id}).exec();
        } catch (error) {
            
        }
    }

    async createUser(userInput: UserInputType) {
        try {
            const {nickname, oauth_id, oauth_type, password} = userInput;
            
            const data = {
                nickname,
                oauth_id,
                oauth_type,
                password,
                created_at: new Date(),
            };

            const newUser = await this.userModel.create(data);
            
            return {
                _id: newUser._id,
                ...data
            };
        } catch (error) {
            if (error.name === "MongoServerError") {
                throw new NotFoundException("Unique Key Error");
            }
        } 
    }
}