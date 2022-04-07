import { ApiProperty } from '@nestjs/swagger';
import { operations, Operation } from './operations.object';

export class OperationsListResponseDto extends Array<Operation> {
  @ApiProperty({
    example: operations,
  })
  readonly response: Array<Operation>;
}
