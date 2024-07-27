import { Cliente } from "src/cliente/cliente.model";
import { Conta } from "src/conta/conta.model";

export class Gerente {

    constructor(
        public idGerente: number,
        public nome: string,
        public Cliente: Cliente[]

    ) {

    }
}