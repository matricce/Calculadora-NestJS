import { ErrorBase } from '../errors/error.base';

export class DivisionByZeroError extends ErrorBase {
  readonly code = 'DIVISION_BY_ZERO';

  static message = 'Division by zero, the denominator cannot be zero.';

  constructor(metadata?: unknown) {
    super(DivisionByZeroError.message, metadata);
  }
}
