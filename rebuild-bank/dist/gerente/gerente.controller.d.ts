import { GerentesService } from './gerente.service';
import { Cliente } from '../cliente/cliente.model';
import { Gerente } from './gerente.model';
export declare class GerentesController {
    private readonly gerentesService;
    constructor(gerentesService: GerentesService);
    criarCliente(nome: string, cliente: Cliente): Gerente;
    findAll(): Gerente[];
    modificarCliente(idGerente: number, id: number, clienteAtualizado: Partial<Cliente>): Cliente;
    deletarCliente(idGerente: number): void;
}
