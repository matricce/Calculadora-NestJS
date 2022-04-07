import { Injectable } from '@nestjs/common';
import { operations } from '../operations/operations.object';
import { Calculator } from './calc.class';
import { opCodeTypes } from '../operations/operations.types';
import { OperationResult } from '../operations/operations.types';

@Injectable()
export class CalcService extends Calculator {
  getOperations(): string {
    return JSON.stringify(operations);
  }
  callOperation(
    operation: opCodeTypes,
    x: number,
    y?: number,
  ): OperationResult {
    const response: OperationResult = {
      operation: {
        name: operation,
        x: x,
        y: y,
      },
      error: '',
      result: {
        value: null,
      },
    };
    try {
      response.result.value = this[operation](x, y);
    } catch (error) {
      response.error = error.message;
    }
    return response;
  }
}
