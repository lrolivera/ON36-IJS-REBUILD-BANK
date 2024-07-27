"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteService = void 0;
const common_1 = require("@nestjs/common");
const path = require("path");
const fs = require("fs");
let ClienteService = class ClienteService {
    constructor() {
        this.filePath = path.resolve('./cliente.json');
        this.idContador = 1;
    }
    readClientes() {
        const data = fs.readFileSync(this.filePath, 'utf8');
        return JSON.parse(data);
    }
    writeClientes(clientes) {
        fs.writeFileSync(this.filePath, JSON.stringify(clientes, null, 2), 'utf8');
    }
    criarCliente(nome, cpf, endereco, telefone, conta) {
        const clientes = this.readClientes();
        const newCliente = {
            id: clientes.length > 0 ? clientes[clientes.length - 1].id + 1 : 1,
            nome,
            cpf,
            endereco,
            telefone,
            Conta: [conta]
        };
        clientes.push(newCliente);
        this.writeClientes(clientes);
        return newCliente;
    }
    findById(id) {
        const clientes = this.readClientes();
        const cliente = clientes.find(cliente => cliente.id === Number(id));
        if (!cliente) {
            console.log(`Cliente com o id ${id} não foi encontrado.`);
        }
        return cliente;
    }
    modificarConta(id, newNome, newEndereco, newTelefone) {
        const clientes = this.readClientes();
        const cliente = clientes.find(cliente => cliente.id === Number(id));
        if (cliente) {
            cliente.nome = newNome;
            cliente.endereco = newEndereco;
            cliente.telefone = newTelefone;
            this.writeClientes(clientes);
        }
        return cliente;
    }
    deletarCliente(id) {
        const clientes = this.readClientes();
        const clienteIndex = clientes.findIndex(cliente => cliente.id === Number(id));
        if (clienteIndex !== -1) {
            clientes.splice(clienteIndex, 1);
            this.writeClientes(clientes);
        }
        else {
            console.log(`Cliente com o id ${id} não foi encontrado para remoção.`);
        }
    }
};
exports.ClienteService = ClienteService;
exports.ClienteService = ClienteService = __decorate([
    (0, common_1.Injectable)()
], ClienteService);
//# sourceMappingURL=cliente.service.js.map