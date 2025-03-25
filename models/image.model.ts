import mongoose, { Schema, Document, models } from "mongoose";

interface IImage extends Document {
    title: string;
    transformationtype: string;
    publicid: string;
    secureUrl: string;
    width?: number;
    height?: number;
    config?: object;
    transformationurl?: string;
    aspectratio?: string;
    color?: string;
    Prompt?: string;
    author: mongoose.Schema.Types.ObjectId;
    CreatedAt?: Date;
    UpdatedAt?:Date;
}

const ImagesSchema = new Schema<IImage>({
    title: {
        type: String, require: true
    },
    transformationtype: {
        type: String, require: true
    },
    publicid: {
        type: String, require: true
    },
    secureUrl: {
        type: String, require: true
    },
    width: {
        type: Number
    },
    height: {
        type: Number
    },
    config: {
        type: Object
    },
    transformationurl: {
        type: String
    },
    aspectratio: {
        type: String
    },
    color: {
        type: String
    },
    Prompt: {
        type: String
    },
    author: {
        type: Schema.Types.ObjectId, ref: 'User'
    },
    CreatedAt: {
        type: Date,
        default: Date.now
    },
    UpdatedAt:{
        type:Date,
        default:Date.now
    }
});

const Images = models?.ImagesSchema ||mongoose.model<IImage>('Images', ImagesSchema);
export default Images