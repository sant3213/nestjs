import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TestController } from './controller/test.controller';
import { TestService } from './service/test.service';
import {TestSchema} from './test-model/schema/schema-test';

@Module({ 
    imports: [MongooseModule.forFeature([
        {name:'test', schema:TestSchema}
    ])],
    controllers: [TestController],
    providers: [TestService],})
export class TestModule {
   
}
