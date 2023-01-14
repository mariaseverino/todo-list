import { Router } from "express";
import { GetAllTaskController } from "./app/getAllTask/GetAllTaskController";
import { GetOneTaskController } from "./app/getOneTask/GetOneTaskController";
import { CreateTaskController } from "./app/createTask/CreateTaskController";
import { DeleteTaskController } from "./app/deleteTask/DeleteTaskController";
import { UpdateTaskController } from "./app/updateTask/UpdateTaskController";
import { CompleteTaskController } from "./app/completeTask/CompleteTaskController";

const routes = Router();

const getAllTaskController = new GetAllTaskController();
const getOneTaskController = new GetOneTaskController();
const createTaskController = new CreateTaskController();
const deleteTaskController = new DeleteTaskController();
const updateTaskController = new UpdateTaskController();
const completeTaskController = new CompleteTaskController();

routes
    .get("/tarefas", getAllTaskController.handle)
    .get("/tarefas/:id", getOneTaskController.handle)
    .post("/tarefas", createTaskController.handle)
    .delete("/tarefas/:id", deleteTaskController.handle)
    .put("/tarefas/:id", updateTaskController.update)
    .put("/tarefas/done/:id", completeTaskController.handle);

export default routes;
