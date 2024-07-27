import { Cliente } from './cliente.model';
import { Conta } from '../conta/conta.model';
export declare class ClienteService {
    private readonly filePath;
    private idContador;
    private readClientes;
    private writeClientes;
    criarCliente(nome: string, cpf: string, endereco: string, telefone: string, conta: Conta): Cliente;
    findById(id: number): Cliente | undefined;
    modificarConta(id: number, newNome: string, newEndereco: string, newTelefone: string): Cliente | undefined;
    deletarCliente(id: number): void;
}
