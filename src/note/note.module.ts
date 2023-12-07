import { Module } from '@nestjs/common';
import { NoteService } from './note.service';
import { NoteResolver } from './note.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Note, NoteSchema } from './domain/note.schema';
import { User, UserSchema } from 'src/user/domain/user.schema';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Note.name, schema: NoteSchema },
    { name: User.name, schema: UserSchema }]),
    UserModule
  ],
  providers: [NoteService, NoteResolver, UserService],

})
export class NoteModule {}
