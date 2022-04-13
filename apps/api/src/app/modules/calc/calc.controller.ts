import {
  Controller,
  Get,
  HttpStatus,
  Post,
  Body,
  NotAcceptableException,
} from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CalcOneValueDto, CalcTwoValuesDto } from '../../libs/dtos/calc.dto';
import { CalcService } from './calc.service';
import { OperationsListResponseDto } from '../operations/operations.dto';
import { DivisionByZeroError } from './calc.errors';
import { ErrorResponseDto } from '../../libs/dtos/error.response.dto';
import { CalcResultDto } from './dto/calc-result.dto';

@Controller('calc')
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

  @ApiOperation({ summary: 'calcula a adição entre dois números' })
  @ApiResponse({
    status: HttpStatus.OK,
    type: CalcResultDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
  })
  @Post('add')
  async add(@Body() opParamsDto: CalcTwoValuesDto): Promise<CalcResultDto> {
    const result = await this.calcService.add(opParamsDto.x, opParamsDto.y);
    return result.unwrap(
      (value) => new CalcResultDto(value, 'add', opParamsDto.x, opParamsDto.y),
    );
  }

  @ApiOperation({ summary: 'calcula a diferença entre dois números' })
  @ApiResponse({
    status: HttpStatus.OK,
    type: CalcResultDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
  })
  @Post('sub')
  async sub(@Body() opParamsDto: CalcTwoValuesDto): Promise<CalcResultDto> {
    const result = await this.calcService.sub(opParamsDto.x, opParamsDto.y);
    return result.unwrap(
      (value) => new CalcResultDto(value, 'sub', opParamsDto.x, opParamsDto.y),
    );
  }

  @ApiOperation({ summary: 'calcula o produto entre dois números' })
  @ApiResponse({
    status: HttpStatus.OK,
    type: CalcResultDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
  })
  @Post('mult')
  async mult(@Body() opParamsDto: CalcTwoValuesDto): Promise<CalcResultDto> {
    const result = await this.calcService.mult(opParamsDto.x, opParamsDto.y);
    return result.unwrap(
      (value) => new CalcResultDto(value, 'mult', opParamsDto.x, opParamsDto.y),
    );
  }

  @ApiOperation({ summary: 'calcula o quociente entre dois números' })
  @ApiResponse({
    status: HttpStatus.OK,
    type: CalcResultDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
  })
  @ApiResponse({
    status: HttpStatus.NOT_ACCEPTABLE,
    description: DivisionByZeroError.message,
    type: ErrorResponseDto,
  })
  @Post('div')
  async div(@Body() opParamsDto: CalcTwoValuesDto): Promise<CalcResultDto> {
    const result = await this.calcService.div(opParamsDto.x, opParamsDto.y);
    return result.unwrap(
      (value) => new CalcResultDto(value, 'div', opParamsDto.x, opParamsDto.y),
      (error) => {
        if (error instanceof DivisionByZeroError)
          throw new NotAcceptableException(error.unwrap());
        throw error;
      },
    );
  }

  @ApiOperation({ summary: 'calcula a potência entre dois números' })
  @ApiResponse({
    status: HttpStatus.OK,
    type: CalcResultDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
  })
  @Post('pow')
  async pow(@Body() opParamsDto: CalcTwoValuesDto): Promise<CalcResultDto> {
    const result = await this.calcService.pow(opParamsDto.x, opParamsDto.y);
    return result.unwrap(
      (value) => new CalcResultDto(value, 'pow', opParamsDto.x, opParamsDto.y),
    );
  }

  @ApiOperation({ summary: 'calcula a raiz quadrada de um número' })
  @ApiResponse({
    status: HttpStatus.OK,
    type: CalcResultDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
  })
  @Post('square_root')
  async square_root(
    @Body() opParamsDto: CalcOneValueDto,
  ): Promise<CalcResultDto> {
    const result = await this.calcService.square_root(opParamsDto.x);
    return result.unwrap(
      (value) => new CalcResultDto(value, 'square_root', opParamsDto.x),
    );
  }
}
