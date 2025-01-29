import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, Res, InternalServerErrorException, HttpCode } from '@nestjs/common';
import { FruitsService } from './fruits.service';
import { CreateFruitDto } from './dto/create-fruit.dto';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { Request, Response } from 'express';

@Controller('fruits')
export class FruitsController {
  constructor(private readonly fruitsService: FruitsService) { }

  @Post()
  @UseGuards(AuthGuard)
  @HttpCode(201)
  async create(@Body() createFruitDto: CreateFruitDto, @Req() req: Request) {

    const { id } = req['user'];
    try {
      const response = await this.fruitsService.create(createFruitDto, id);
      return response;

    } catch (error) {
      throw new InternalServerErrorException();
    }

  }

  @Get()
  findAll(@Res() res: Response) {
    return this.fruitsService.findAll(res);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fruitsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFruitDto) {
    return this.fruitsService.update(+id, updateFruitDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fruitsService.remove(+id);
  }
}
