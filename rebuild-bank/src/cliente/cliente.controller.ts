import { Controller, Post, Body } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { Cliente } from './cliente.model';
import { Conta } from '../conta/conta.model';

@Controller('cliente')
export class ClienteController {
    constructor(private readonly clienteService: ClienteService) {}

    @Post()
    criarCliente(
        @Body('nome') nome: string,
        @Body('cpf') cpf: string,
        @Body('endereco') endereco: string,
        @Body('telefone') telefone: string,
        @Body('conta') conta: Conta[]  // Ajustado para aceitar um array de contas
    ) {
        return this.clienteService.criarCliente(nome, cpf, endereco, telefone, conta);
    }
}
