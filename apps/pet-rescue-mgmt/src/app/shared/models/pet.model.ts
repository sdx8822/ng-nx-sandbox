

export class PetModel implements IPetModel {
    constructor(obj: IPetModel) {
        if(obj) {
            Object.assign(this, obj);
        }
    }

    id!: string;
    name!: string;
    breed!: string;
    description!: string;
    dob!: string;
    status!: IStatusModel;
}

export interface IPetModel {
    id: string;
    name: string;
    breed: string;
    description: string;
    dob: string;
    status: IStatusModel;
}

export interface IStatusModel {
    medicalRecords: IMedicalModel[];
    diet: string[];
    illness: string[];
    specialCareNote: string;
    isFostered: boolean;
    isAdopted: boolean;
}

export interface IMedicalModel {
    label: string;
    hasRecord: boolean;
    file: string;
}