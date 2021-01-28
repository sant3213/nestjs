import { Module } from '@nestjs/common';
import { TestService } from './service/test/test.service';

@Module({
    imports:[],
    providers:[TestService]
})
export class TestFileModule {}
