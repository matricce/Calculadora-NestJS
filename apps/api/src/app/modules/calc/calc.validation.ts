import { Injectable, BadRequestException, PipeTransform } from '@nestjs/common';
import { opCodeTypes } from '../operations/operations.types';

@Injectable()
export class OpValidationPipe implements PipeTransform {
  transform(value: string) {
    const opCodeList: Array<opCodeTypes> = [
      'add',
      'sub',
      'div',
      'mult',
      'square_root',
      'pow',
    ];
    if ((opCodeList as Array<string>).indexOf(value as string) === -1) {
      throw new BadRequestException(`<${value}> is not a valid operation`);
    }
    return value;
  }
}
