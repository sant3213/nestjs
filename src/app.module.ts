import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { env } from './config/config';
import { TestModule } from './test-module/test/test.module';

@Module({
  imports: [
    TestModule,
    MongooseModule.forRoot(env.dbUrl + env.dbName, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
