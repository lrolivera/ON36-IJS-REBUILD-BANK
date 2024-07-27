import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteService } from './cliente/cliente.service';
import { ContaService } from './conta/conta.service';
import { GerentesService } from './gerente/gerente.service';

@Module({
  imports: [],
  controllers: [AppController, ClienteController],
  providers: [AppService, ClienteService, ContaService, GerentesService],
})
export class AppModule {}
