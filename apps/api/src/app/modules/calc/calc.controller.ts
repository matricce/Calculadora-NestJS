import { Controller, Get, HttpStatus, Post, Body, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CalcOneValueDto, CalcTwoValuesDto } from '../../libs/dtos/calc.dto';
import { CalcService } from './calc.service';
import { OperationsListResponseDto } from '../operations/operations.dto';
import { OperationResult } from '../operations/operations.types';
import { OpValidationPipe } from './calc.validation';
import { opCodeTypes } from '../operations/operations.types';

@Controller()
export class CalcController {
  constructor(private readonly calcService: CalcService) {}

  @ApiOperation({ summary: 'retorna um JSON com as operações disponíveis' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Operações disponíveis',
    type: OperationsListResponseDto,
  })
  @Get()
  getOperations(): string {
    return this.calcService.getOperations();
  }
  @ApiOperation({ summary: 'calcula uma operação' })
  @Post('calc/square_root')
  calcSquareRoot(@Body() opParamsDto: CalcOneValueDto): OperationResult {
    return this.calcService.callOperation('square_root', opParamsDto.x);
  }
  @Post('calc/:opCode')
  calc(
    @Param('opCode', new OpValidationPipe()) opCode: opCodeTypes,
    @Body() opParamsDto: CalcTwoValuesDto,
  ): OperationResult {
    return this.calcService.callOperation(opCode, opParamsDto.x, opParamsDto.y);
  }
}
