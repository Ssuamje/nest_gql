import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { NoteService } from "./note.service";
import { NoteInputType, NoteType } from "./domain/note.schema";
import { UserService } from "src/user/user.service";

@Resolver()
export class NoteResolver {
    constructor(
        private readonly noteService: NoteService,
        private readonly userService: UserService,
    ) {}

    @Query(() => [NoteType])
    async findAllNotes() {
        try {
            return await this.noteService.findAllNotes();
        } catch (error) {
            
        }
    }

    @Mutation(() => NoteType)
    async createNote(@Args("input") noteInput: NoteInputType) {
        try {
            return await this.noteService.createNote(noteInput);
        } catch (error) {
            
        }
    }
}