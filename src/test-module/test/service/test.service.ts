import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Test } from '../test-model/interface/test-interface';
import { Model } from 'mongoose';

@Injectable()
export class TestService {

    constructor(@InjectModel('test') private testModel: Model<Test>) {}
     
    async getTest(){
        return await this.testModel.find();
    }

    async saveTest(test:Test){
        const newTest = new this.testModel(test);
        console.log(newTest);
        return await newTest.save();
    }
}
