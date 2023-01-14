import mongoose from "mongoose";

mongoose.set("strictQuery", true);

mongoose
    .connect("mongodb://localhost/distribuidos")
    .then(() => console.log("banco de dados funcionando"))
    .catch(() => console.log("erro na conecçao do banco de dados"));

mongoose.Promise = global.Promise;

export default mongoose;
