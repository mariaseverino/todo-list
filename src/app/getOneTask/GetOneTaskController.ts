import { Request, Response } from "express";
import { GetOneTaskUseCase } from "./GetOneTaskUseCase";

export class GetOneTaskController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        console.log(id);
        try {
            const getOneTaskUseCase = new GetOneTaskUseCase();
            const task = await getOneTaskUseCase.oneTask(id);

            return response.status(200).json(task);
        } catch (err) {
            return response.status(400).json({
                message: "Erro",
            });
        }
    }
}
