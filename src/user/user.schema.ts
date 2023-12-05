import { ArgsType, Field, ID, InputType, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { OauthType } from "./domain/oauth.type.enum";
import { Nickname } from "./domain/nickname.scalar";

export type UserDocument = HydratedDocument<User>;

@Schema() // MongoDB Collection에서 사용할 스키마 - Users가 된다.
export class User {

  @Prop()
  nickname: Nickname;

  @Prop()
  oauth_type: OauthType;

  @Prop()
  created_at: Date;
}
export const UserSchema = SchemaFactory.createForClass(User);

@ObjectType()
export class UserType {

  @Field((type) => Nickname)
  nickname: string;

  @Field(type => OauthType)
  oauth_type: OauthType;

  @Field()
  created_at: Date;
}

@ArgsType()
@InputType()
export class UserInputType {
  @Field(type => Nickname)
  nickname: Nickname;

  @Field(type => OauthType)
  oauth_type: OauthType;
}