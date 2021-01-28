import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { DtoTest } from '../test-model/dto/test.dto';

@Controller('test')
export class TestController {

    @Get('hello')
    getHello(): string {
      return 'Hallo !!';
    }
  
    @Post()
    postTest(@Body() toDo: DtoTest):string{
      console.log(toDo.name)
    return toDo.name
    }
  
    @Put()
    updateTest():string{
    return 'approved'
    }
  
    @Delete(':id')
    deleteTest(@Param('id') id):string{
    return `Deleting ${id}`
    }
}
