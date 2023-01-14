import { Request, Response } from "express";
import { GetAllTaskUseCase } from "./GetAllTaskUseCase";

export class GetAllTaskController {
    async handle(request: Request, response: Response) {
        try {
            const getAllTaskUseCase = new GetAllTaskUseCase();
            const tasks = await getAllTaskUseCase.listTasks();

            return response.status(200).json(tasks);
        } catch (err) {
            console.log(err);
            return response.status(400).json({
                message: "Erro",
            });
        }
    }
}
