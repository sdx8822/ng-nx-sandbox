import { PetDto } from './pet.model';
import { Pet, IPetModel } from './pet.schema';

export class PetService {
    static async getAll(): Promise<PetDto[]> {
        const pets: IPetModel[] | void = await Pet.find().catch(console.log);
        return (pets || []).map((pet: IPetModel) => ({
            id: pet.id,
            name: pet.name,
            breed: pet.breed,
            description: pet.description,
            status: pet.status
        }));
    }

    static async createPet(pet: PetDto): Promise<PetDto> {
        const newPet: IPetModel | void = await Pet.create(pet).catch(console.log);

        if (newPet) {
            return {
                id: pet.id,
                name: pet.name,
                breed: pet.breed,
                description: pet.description,
                status: pet.status
            }
        }

        return null;
    }

    static async delete(id: string): Promise<boolean> {
        const deletedPet: IPetModel | void = await Pet.findByIdAndDelete(id).catch(console.log);
        return !!deletedPet;
    }
}