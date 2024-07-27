import { Cliente } from "src/cliente/cliente.model";
import { Conta } from "src/conta/entity/Conta";
export declare class Gerente {
    private id;
    private nome;
    private cpf;
    private endereco;
    private telefone;
    private idGerente;
    private cliente;
    private conta;
    constructor(cliente: Cliente, conta: Conta, idGerente: string);
}
