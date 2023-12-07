import { ArgsType, Field, ID, InputType, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { User, UserType } from "src/user/domain/user.schema";

export type NoteDocument = HydratedDocument<Note>;

@Schema()
export class Note {
    @Prop()
    title: string;

    @Prop()
    content: string;

    @Prop(ID)
    author_id: string;

    @Prop()
    created_at: Date;
}
export const NoteSchema = SchemaFactory.createForClass(Note);

@ObjectType()
export class NoteType {
    @Field((type) => ID)
    _id: string;

    @Field()
    title: string;

    @Field()
    content: string;

    @Field((type) => UserType)
    author: UserType;
}

@ArgsType()
@InputType()
export class NoteInputType {
    @Field()
    title: string;

    @Field()
    content: string;

    @Field(type => ID)
    author_id: string;
}