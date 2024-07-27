import { Conta } from "../../conta/entity/Conta";
import { Gerente } from "src/gerente/entity/Gerente";
export declare class Cliente {
    private id;
    private nome;
    private cpf;
    private endereco;
    private telefone;
    private conta;
    private gerente;
    constructor(conta: Conta, gerente: Gerente);
}
