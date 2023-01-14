import { Task } from "../../domain/Task";
import { MongoRepository } from "../../infra/MongoRepository";

interface CreateTaskDTO {
    descricao: string;
    prazo: string;
}

export class CreateTaskUseCase {
    async addTask(params: CreateTaskDTO) {
        const mongoRepository = new MongoRepository();

        const taskAlreadyExist = await mongoRepository.findByDescription(
            params.descricao
        );

        if (taskAlreadyExist) {
            throw new Error("Tarefa já existe!");
        }

        const prazo = new Date(params.prazo);
        const completa = false;

        const newTask = new Task(params.descricao, prazo, completa);

        mongoRepository.save(newTask);
    }
}
