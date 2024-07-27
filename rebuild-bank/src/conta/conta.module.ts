import { Module } from '@nestjs/common';
import { ContasController } from './conta.controller';
import { ContaService } from './conta.service';

@Module({
  controllers: [ContasController],
  providers: [ContaService]
})
export class ContaModule {}