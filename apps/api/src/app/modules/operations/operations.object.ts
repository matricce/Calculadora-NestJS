import { deepFreeze } from './operations.utils';

export type Operation = {
  command: string;
  description: string;
  x: string;
  y?: string;
};

const ops: Array<Operation> = [
  {
    command: 'add',
    description: 'faz a operação de soma entre 2 números',
    x: 'number',
    y: 'number',
  },
  {
    command: 'sub',
    description: 'faz a operação de subtração entre 2 números',
    x: 'number',
    y: 'number',
  },
  {
    command: 'div',
    description: 'faz a operação de divisão entre 2 números',
    x: 'number',
    y: 'number',
  },
  {
    command: 'mult',
    description: 'faz a operação de multiplicação entre 2 números',
    x: 'number',
    y: 'number',
  },
  {
    command: 'pow',
    description: 'faz a operação de exponenciação entre 2 números',
    x: 'number',
    y: 'number',
  },
  {
    command: 'square_root',
    description: 'faz a operação de raiz quadrada de um número',
    x: 'number',
  },
];
export const operations = deepFreeze(ops);
