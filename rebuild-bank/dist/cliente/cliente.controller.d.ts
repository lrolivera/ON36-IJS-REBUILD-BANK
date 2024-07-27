import { ClienteService } from './cliente.service';
import { Cliente } from './cliente.model';
import { Conta } from '../conta/conta.model';
export declare class ClienteController {
    private readonly clienteService;
    constructor(clienteService: ClienteService);
    criarCliente(nome: string, cpf: string, endereco: string, telefone: string, conta: Conta): Cliente;
    findById(id: number): Cliente;
    modificarConta(id: number, newNome: string, newEndereco: string, newTelefone: string): Cliente;
    deletarCliente(id: number): void;
}
