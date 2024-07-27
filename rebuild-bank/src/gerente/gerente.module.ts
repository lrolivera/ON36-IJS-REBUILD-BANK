import { Module } from '@nestjs/common';
import { GerentesController } from './gerente.controller';
import { GerentesService } from './gerente.service';

@Module({
  controllers: [GerentesController],
  providers: [GerentesService]
})
export class GerentesModule {}