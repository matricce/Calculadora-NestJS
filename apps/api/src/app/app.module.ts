import { Module } from '@nestjs/common';
import { CalcModule } from './modules/calc/calc.module';

@Module({
  imports: [CalcModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
