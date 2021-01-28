import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('test-file')
export class TestFileController {

    @Get()
    @UseInterceptors(FileInterceptor('file'))
    uploadFile(){
        
    }

}
