import { model, Schema, Model, Document } from 'mongoose';

export interface IPetModel extends Document {
    name: string;
    breed: string;
    description: string;
}

const PetSchema: Schema = new Schema({
    name: { type: String, required: true},
    breed: { type: String, required: true },
    description: { type: String, required: true }
});

export const Pet: Model<IPetModel> = model<IPetModel>('Pet', PetSchema);