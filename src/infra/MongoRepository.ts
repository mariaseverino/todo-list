import { Task } from "../domain/Task";
import { ITaskRepoitory } from "../domain/ITaskReporitory";
import TaskModel from "./TaskSchema";

export class MongoRepository implements ITaskRepoitory {
    async getAll(): Promise<Task[] | null> {
        const task = await TaskModel.find();
        return task;
    }
    async findById(id: string): Promise<Task | null> {
        const task = await TaskModel.findOne({ id });
        return task;
    }
    async findByDescription(descricao: string): Promise<Task | null> {
        const task = await TaskModel.findOne({ descricao });
        return task;
    }
    async save(task: Task): Promise<void> {
        const { id, descricao, prazo, completa } = task;
        await TaskModel.create({
            id,
            descricao,
            prazo,
            completa,
        });
    }
    async updateDescription(id: string, descricao: string): Promise<void> {
        await TaskModel.where({ id }).update({ descricao });
    }
    async updateComplete(id: string, completa: boolean): Promise<void> {
        await TaskModel.where({ id }).update({ completa });
    }
    async delete(id: string): Promise<void> {
        await TaskModel.deleteOne({ id });
    }
}
