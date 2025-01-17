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
exports.GerentesController = void 0;
const common_1 = require("@nestjs/common");
const gerente_service_1 = require("./gerente.service");
const cliente_model_1 = require("../cliente/cliente.model");
let GerentesController = class GerentesController {
    constructor(gerentesService) {
        this.gerentesService = gerentesService;
    }
    criarCliente(nome, cliente) {
        return this.gerentesService.criarCliente(nome, cliente);
    }
    findAll() {
        return this.gerentesService.findAll();
    }
    modificarCliente(idGerente, id, clienteAtualizado) {
        const cliente = this.gerentesService.modificarCliente(idGerente, id, clienteAtualizado);
        return cliente;
    }
    deletarCliente(idGerente) {
        return this.gerentesService.deletarCliente(idGerente);
    }
};
exports.GerentesController = GerentesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('nome')),
    __param(1, (0, common_1.Body)('cliente')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, cliente_model_1.Cliente]),
    __metadata("design:returntype", void 0)
], GerentesController.prototype, "criarCliente", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], GerentesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Patch)(':idGerente/clientes/:id'),
    __param(0, (0, common_1.Param)('idGerente')),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", void 0)
], GerentesController.prototype, "modificarCliente", null);
__decorate([
    (0, common_1.Delete)(':idGerente'),
    __param(0, (0, common_1.Param)('idGerente', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], GerentesController.prototype, "deletarCliente", null);
exports.GerentesController = GerentesController = __decorate([
    (0, common_1.Controller)('gerentes'),
    __metadata("design:paramtypes", [gerente_service_1.GerentesService])
], GerentesController);
//# sourceMappingURL=gerente.controller.js.map