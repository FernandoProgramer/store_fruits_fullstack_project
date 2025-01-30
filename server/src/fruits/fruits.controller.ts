import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, HttpCode } from '@nestjs/common';
import { FruitsService } from './fruits.service';
import { CreateFruitDto } from './dto/create-fruit.dto';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { Request } from 'express';
import { UpdateFruitDto } from './dto/update-fruit.dto';

@Controller('fruits')
export class FruitsController {
  constructor(private readonly fruitsService: FruitsService) { }

  @Post()
  @UseGuards(AuthGuard)
  @HttpCode(201)
  create(@Body() createFruitDto: CreateFruitDto, @Req() req: Request) {
    const { id } = req['user'];
    return this.fruitsService.create(createFruitDto, id);
  }

  @Get()
  @HttpCode(200)
  findAll() {
    return this.fruitsService.findAll();
  }

  @Get(':id')
  @HttpCode(200)
  @UseGuards(AuthGuard)
  findOne(@Param('id') id: string) {
    return this.fruitsService.findOne(+id);
  }

  @Patch(':id')
  @HttpCode(200)
  @UseGuards(AuthGuard)
  update(@Param('id') id: string, @Body() updateFruitDto: UpdateFruitDto, @Req() request: Request) {
    const seller_id = request['user']?.id;
    return this.fruitsService.update(+id, updateFruitDto, +seller_id);
  }

  @Delete(':id')
  @HttpCode(204)
  @UseGuards(AuthGuard)
  remove(@Param('id') id: string, @Req() request: Request) {
    const seller_id = request['user']?.id;
    return this.fruitsService.remove(+id, seller_id);
  }
}
