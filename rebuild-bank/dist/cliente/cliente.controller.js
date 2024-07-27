"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteController = void 0;
const common_1 = require("@nestjs/common");
const cliente_service_1 = require("./cliente.service");
const cliente_model_1 = require("./cliente.model");
const conta_model_1 = require("../conta/conta.model");
let ClienteController = class ClienteController {
    constructor(clienteService) {
        this.clienteService = clienteService;
    }
    criarCliente(nome, cpf, endereco, telefone, conta) {
        return this.clienteService.criarCliente(nome, cpf, endereco, telefone, conta);
    }
    findById(id) {
        return this.clienteService.findById(id);
    }
    modificarConta(id, newNome, newEndereco, newTelefone) {
        return this.clienteService.modificarConta(id, newNome, newEndereco, newTelefone);
    }
    deletarCliente(id) {
        this.clienteService.deletarCliente(id);
    }
};
exports.ClienteController = ClienteController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('nome')),
    __param(1, (0, common_1.Body)('cpf')),
    __param(2, (0, common_1.Body)('endereco')),
    __param(3, (0, common_1.Body)('telefone')),
    __param(4, (0, common_1.Body)('conta')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, conta_model_1.Conta]),
    __metadata("design:returntype", void 0)
], ClienteController.prototype, "criarCliente", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ClienteController.prototype, "findById", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)('nome')),
    __param(2, (0, common_1.Body)('endereco')),
    __param(3, (0, common_1.Body)('telefone')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String, String]),
    __metadata("design:returntype", cliente_model_1.Cliente)
], ClienteController.prototype, "modificarConta", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ClienteController.prototype, "deletarCliente", null);
exports.ClienteController = ClienteController = __decorate([
    (0, common_1.Controller)('cliente'),
    __metadata("design:paramtypes", [cliente_service_1.ClienteService])
], ClienteController);
//# sourceMappingURL=cliente.controller.js.map