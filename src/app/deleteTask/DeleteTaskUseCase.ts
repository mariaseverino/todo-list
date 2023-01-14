import { MongoRepository } from "../../infra/MongoRepository";

export class DeleteTaskUseCase {
    async deleteTask(id: string) {
        const mongoRepository = new MongoRepository();

        const taskExist = await mongoRepository.findById(id);

        if (!taskExist) {
            throw new Error("Tarefa não existe!");
        }
        mongoRepository.delete(taskExist.id);
    }
}
