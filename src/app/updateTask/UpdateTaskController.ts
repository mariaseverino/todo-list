import { Request, Response } from "express";
import { UpdateTaskUseCase } from "./UpdateTaskUseCase";

export class UpdateTaskController {
    async update(request: Request, response: Response) {
        const { id } = request.params;
        const { descricao } = request.body;

        try {
            const updateTaskUseCase = new UpdateTaskUseCase();

            await updateTaskUseCase.updateTask({ id, descricao });

            return response.status(201).send();
        } catch (err) {
            return response.status(400).json({
                message: "Erro",
            });
        }
    }
}
