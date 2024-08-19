import { Prop, Schema } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export default class User extends Document {
    @Prop({required: true})
    username: String;

    @Prop({required: true})
    password: String;

    @Prop({required: true})
    email: String;

    @Prop({required: true})
    firstName: String;

    @Prop({required: true})
    lastName: String;

    @Prop({required: false})
    pfp: String;

    @Prop({required: false})
    bio: String;

    @Prop({required: false})
    heroes: String[];
}