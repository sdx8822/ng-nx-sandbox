import { IStatusModel } from "@ng-nx-sandbox/shared-libs";

export interface PetDto {
    id: string;
    name: string;
    breed: string;
    description: string;
    status: IStatusModel;
}