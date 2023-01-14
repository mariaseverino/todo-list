import { MongoRepository } from "../../infra/MongoRepository";

interface UpdateTaskDTO {
    id: string;
    descricao: string;
}

export class UpdateTaskUseCase {
    async updateTask(params: UpdateTaskDTO) {
        const mongoRepository = new MongoRepository();

        const taskExist = await mongoRepository.findById(params.id);

        if (!taskExist) {
            throw new Error("Tarefa não existe!");
        }

        mongoRepository.updateDescription(params.id, params.descricao);
    }
}
