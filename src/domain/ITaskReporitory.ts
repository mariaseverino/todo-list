import { Task } from "./Task";

export interface ITaskRepoitory {
    getAll(): Promise<Task[] | null>;
    findById(id: string): Promise<Task | null>;
    findByDescription(descricao: string): Promise<Task | null>;
    save(task: Task): Promise<void>;
    updateDescription(id: string, descricao: string): Promise<void>;
    updateComplete(id: string, completa: boolean): Promise<void>;
    delete(id: string): Promise<void>;
}
