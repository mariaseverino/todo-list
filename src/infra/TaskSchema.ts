import mongoose from "./connection";
import { Task } from "../domain/Task";

const schemaOptions = {
    toJSON: {
        transform: (doc: any, ret: { id: any; _id: any }) => {
            delete ret._id;
        },
    },
    versionKey: false,
};
const taskSchema = new mongoose.Schema<Task>(
    {
        prazo: { type: Date, required: true },
        descricao: { type: String, required: true },
        completa: { type: Boolean, required: true },
        id: { type: String, required: true },
    },
    schemaOptions
);

const TaskModel = mongoose.model<Task>("Task", taskSchema);

export default TaskModel;
