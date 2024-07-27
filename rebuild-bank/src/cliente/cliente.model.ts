import { Conta } from '../conta/conta.model';

export class Cliente {
    constructor(
        public id: number,
        public nome: string,
        public cpf: string,
        public endereco: string,
        public telefone: string,
        public contas: Conta[]  // Use 'contas' em vez de 'Conta'
    ) {}
}
