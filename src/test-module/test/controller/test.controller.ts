import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TestService } from '../service/test.service';
import { Test } from '../test-model/interface/test-interface';

@Controller('test')
export class TestController {

  constructor(private service: TestService){}

    @Get()
    getTests(): Promise<Test[]> {
      return this.service.getTest();
    }
  
    @Post()
    postTest(@Body() toDo: Test):Promise<Test>{
      return this.service.saveTest(toDo)
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
