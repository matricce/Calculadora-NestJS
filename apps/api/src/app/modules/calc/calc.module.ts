import { Module } from '@nestjs/common';
import { CalcController } from './calc.controller';
import { CalcService } from './calc.service';

@Module({
  imports: [],
  controllers: [CalcController],
  providers: [CalcService],
  exports: [],
})
export class CalcModule {}
