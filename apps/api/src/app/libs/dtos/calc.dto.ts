import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CalcTwoValuesDto {
  @ApiProperty({ required: true })
  @IsNumber()
  x: number;

  @ApiProperty({ required: true })
  @IsNumber()
  y: number;
}
export class CalcOneValueDto {
  @ApiProperty({ required: true })
  @IsNumber()
  x: number;
}
