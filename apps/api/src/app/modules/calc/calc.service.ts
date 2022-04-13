import { Injectable } from '@nestjs/common';
import { operations } from '../operations/operations.object';
import { Result } from '@badrap/result';
import { DivisionByZeroError } from './calc.errors';

@Injectable()
export class CalcService {
  getOperations(): string {
    return JSON.stringify(operations);
  }
  async add(x: number, y: number): Promise<Result<number>> {
    return Result.ok(x + y);
  }
  async sub(x: number, y: number): Promise<Result<number>> {
    return Result.ok(x - y);
  }
  async mult(x: number, y: number): Promise<Result<number>> {
    return Result.ok(x * y);
  }
  async div(x: number, y: number): Promise<Result<number>> {
    if (y === 0) {
      return Result.err(new DivisionByZeroError());
    }
    return Result.ok(x / y);
  }
  async pow(x: number, y: number): Promise<Result<number>> {
    return Result.ok(Math.pow(x, y));
  }
  async square_root(x: number): Promise<Result<number>> {
    return Result.ok(Math.sqrt(x));
  }
}
