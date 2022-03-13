import { Schema, model, Document } from 'mongoose'

const schema = new Schema({
    master: String,
    title: String,
    description: String,
    imagePath: String
});

export interface IPhoto extends Document {
    master:string,
    title: string;
    description: string;
    imagePath: string;
}

export default model<IPhoto>('Photo', schema);