import { ArgsType, Field, ID, InputType, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

/* mongoose에 따른 UserSchema 추가 */
// export const UserSchema = new mongoose.Schema({
//     _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
//     displayName: String,
//     email: String,
//     photoUrl: String,
//     passowrd: String,
//     intro: String,
//     created_at: String,
// });

export type UserDocument = HydratedDocument<User>;

@Schema() // MongoDB Collection에서 사용할 스키마 - Users가 된다.
@ObjectType() // GraphQL에서 사용할 스키마 - User가 된다.
export class User {
  @Field(() => ID)
  uid: string;

  @Prop()
  @Field(() => String)
  email: string;

  @Prop()
  @Field(() => String)
  displayName: string;

  @Prop()
  @Field(() => String, { nullable: true })
  photoURL: string;

  @Prop()
  @Field(() => String, { nullable: true })
  intro: string;

  @Prop()
  @Field(() => String, { nullable: true })
  date_crated: string;

  @Prop()
  @Field(() => String, { nullable: true })
  access_token: string;

  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

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