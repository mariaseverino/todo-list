import { MongoRepository } from "../../infra/MongoRepository";

export class CompleteTaskUseCase {
    async doneTask(id: string) {
        const mongoRepository = new MongoRepository();

        const taskExist = await mongoRepository.findById(id);

        if (!taskExist) {
            throw new Error("Tarefa não existe!");
        }

        const completa = true;

        mongoRepository.updateComplete(id, completa);
    }
}
