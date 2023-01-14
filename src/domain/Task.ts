import { v4 } from "uuid";

export class Task {
    public id: string;
    public descricao: string;
    public prazo: Date;
    public completa: boolean;

    constructor(
        descricao: string,
        prazo: Date,
        completa: boolean,
        id?: string
    ) {
        this.descricao = descricao;
        this.prazo = prazo;
        this.completa = completa;

        if (!id) {
            this.id = v4();
        } else {
            this.id = id;
        }
    }
}
