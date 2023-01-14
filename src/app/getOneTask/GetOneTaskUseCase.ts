import { MongoRepository } from "../../infra/MongoRepository";

export class GetOneTaskUseCase {
    async oneTask(id: string) {
        const mongoRepository = new MongoRepository();
        const task = await mongoRepository.findById(id);

        if (!task) {
            throw new Error("Tarefa não existe!");
        }
        return task;
    }
}
