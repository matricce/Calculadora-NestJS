import { ApiProperty } from '@nestjs/swagger';
export class CalcResultDto {
  @ApiProperty({
    example: {
      operation: {
        name: 'operation name',
        x: 2,
        y: 2,
      },
      result: {
        value: 4,
      },
    },
  })
  readonly operation: { name: string; x: number; y?: number };
  readonly result: { value?: number };

  constructor(value: number, name: string, x: number, y?: number) {
    this.operation = { name: name, x: x, y: y };
    this.result = { value: value };
  }
}
