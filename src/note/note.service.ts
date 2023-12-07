import { Injectable } from '@nestjs/common';
import { Note, NoteInputType, NoteType } from './domain/note.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import { Mutation, Query } from '@nestjs/graphql';
import { User } from 'src/user/domain/user.schema';

@Injectable()
export class NoteService {

    constructor(
        @InjectModel(Note.name)
        private noteModel: Model<Note>,
        @InjectModel(User.name)
        private userModel: Model<User>
    ) {}

    @Query(() => [NoteType])
    async findAllNotes() {
        // id 참조방식으로 진행한다면, 프론트엔드 단에서 데이터를 refetch하는게 낫지 않을까?
        try {
            const notes = await this.noteModel.find().exec();
            return await Promise.all(
                notes.map(async (note) => {
                        const author = await this.userModel.findById(note.author_id).exec();
                        return {...note, author}
                })
            );
            

        } catch (error) {
            
        }
    }

    @Mutation(() => NoteType)
    async createNote(noteInput: NoteInputType) {
        try {
            const { title, content, author_id } = noteInput;
            const foundUser = await this.userModel.findById(author_id).exec();
            if (foundUser === null) throw new Error("Author not found");
            
            const data = {
                title,
                content,
                author_id,
                created_at: new Date(),
            };

            const newNote = await this.noteModel.create(data);
            
            return {
                _id: newNote._id,
                title,
                content,
                author: foundUser,
            };
        } catch (error) {
            
        }
    }
}
