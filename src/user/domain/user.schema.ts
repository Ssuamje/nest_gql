import { ArgsType, Field, ID, InputType, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { OauthType } from "./oauth.type.enum";
import { NicknameScalar } from "./nickname.scalar";
import { Nickname } from "./nickname";

export type UserDocument = HydratedDocument<User>;

@Schema() // MongoDB Collection에서 사용할 스키마 - Users가 된다.
export class User {
  @Prop()
  nickname: Nickname;

  @Prop()
  oauth_id: string;

  @Prop()
  oauth_type: OauthType;

  @Prop()
  password: string;

  @Prop()
  created_at: Date;
}
export const UserSchema = SchemaFactory.createForClass(User);
UserSchema.index({ nickname: 1, oauth_type: 1 }, { unique: true });

@ObjectType()
export class UserType {
  @Field((type) => ID)
  _id: string;

  @Field((type) => NicknameScalar)
  nickname: Nickname;

  @Field()
  oauth_id: string;

  @Field(type => OauthType)
  oauth_type: OauthType;

  @Field()
  created_at: Date;
}

@ArgsType()
@InputType()
export class UserInputType {
  @Field(type => NicknameScalar)
  nickname: Nickname;

  @Field()
  oauth_id: string;

  @Field(type => OauthType)
  oauth_type: OauthType;

  @Field()
  password: string;
}