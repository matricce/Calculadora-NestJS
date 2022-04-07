type Operation = {
  name: string;
  x: number;
  y?: number;
};
export type OperationResult = {
  operation: Operation;
  error: string;
  result: {
    value: number;
  };
};
export type opCodeTypes =
  | 'add'
  | 'sub'
  | 'div'
  | 'mult'
  | 'pow'
  | 'square_root';
