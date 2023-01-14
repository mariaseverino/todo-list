import { Request, Response } from "express";
import { CreateTaskUseCase } from "./CreateTaskUseCase";

export class CreateTaskController {
    async handle(request: Request, response: Response) {
        const { descricao, prazo } = request.body;

        try {
            const createTaskUseCase = new CreateTaskUseCase();

            await createTaskUseCase.addTask({
                descricao,
                prazo,
            });

            return response.status(201).send();
        } catch (error) {
            console.log({ error });
            return response.status(400).json({
                message: "Erro",
            });
        }
    }
}
