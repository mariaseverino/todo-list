import { Request, Response } from "express";
import { DeleteTaskUseCase } from "./DeleteTaskUseCase";

export class DeleteTaskController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        console.log(id);

        try {
            const deleteTaskUseCase = new DeleteTaskUseCase();
            await deleteTaskUseCase.deleteTask(id);

            return response.status(201).send();
        } catch (err) {
            return response.status(400).json({
                message: "Erro",
            });
        }
    }
}
