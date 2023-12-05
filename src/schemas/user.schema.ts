import { ArgsType, Field, ID, InputType, ObjectType } from "@nestjs/graphql";
import mongoose from "mongoose";

/* mongoose에 따른 UserSchema 추가 */
export const UserSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    displayName: String,
    email: String,
    photoUrl: String,
    passowrd: String,
    intro: String,
    created_at: String,
});


@ObjectType()
export class User {
  @Field(() => ID)
  uid: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  displayName: string;

  @Field(() => String, { nullable: true })
  photoURL: string;

  @Field(() => String, { nullable: true })
  intro: string;

  @Field(() => String, { nullable: true })
  date_crated: string;

  @Field(() => String, { nullable: true })
  access_token: string;

  password: string;
}

@ArgsType()
@InputType()
export class UserInputType {
  @Field()
  email: string;

  @Field()
  displayName: string;

  @Field({ nullable: true })
  photoURL: string;

  @Field({ nullable: true })
  intro: string;

  @Field()
  password1: string;

  @Field()
  password2: string;
}