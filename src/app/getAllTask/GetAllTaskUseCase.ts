import { MongoRepository } from "../../infra/MongoRepository";

export class GetAllTaskUseCase {
    async listTasks() {
        const mongoRepository = new MongoRepository();

        const tasks = await mongoRepository.getAll();

        return tasks;
    }
}
