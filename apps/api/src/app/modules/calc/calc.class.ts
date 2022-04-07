import { DivisionByZeroError } from '../../libs/dtos/error.response.dto';
export class Calculator {
  public opCode = {
    add: this.add,
    sub: this.sub,
    mult: this.mult,
    div: this.div,
    pow: this.pow,
    square_root: this.square_root,
  };
  private add(x: number, y: number): number {
    return x + y;
  }
  private sub(x: number, y: number): number {
    return x - y;
  }
  private div(x: number, y: number): number {
    if (y === 0) {
      throw new Error(DivisionByZeroError.message);
    }
    return x / y;
  }
  private mult(x: number, y: number): number {
    return x * y;
  }
  private pow(x: number, y: number): number {
    return Math.pow(x, y);
  }
  private square_root(x: number): number {
    return Math.sqrt(x);
  }
}
