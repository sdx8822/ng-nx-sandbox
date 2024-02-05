import { model, Schema, Model, Document } from 'mongoose';
import { PetModel } from '@ng-nx-sandbox/shared-libs';

export interface IPetModel extends Document {
    name: PetModel['name'];
    breed: PetModel['breed'];
    description: PetModel['description'];
    dob: PetModel['dob'];
    status: PetModel['status'];
}

const PetSchema: Schema = new Schema({
    name: { type: String, required: true},
    breed: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: Schema.Types.Map }
});

export const Pet: Model<IPetModel> = model<IPetModel>('Pet', PetSchema);