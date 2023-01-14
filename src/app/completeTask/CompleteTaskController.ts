import { Request, Response } from "express";
import { CompleteTaskUseCase } from "./CompleteTaskUseCase";

export class CompleteTaskController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        // const { completa } = request.body;
        // console.log(completa, id);
        try {
            const completeTaskUseCase = new CompleteTaskUseCase();
            await completeTaskUseCase.doneTask(id);

            return response.status(201).send();
        } catch (err) {
            return response.status(400).json({
                message: "Erro",
            });
        }
    }
}
