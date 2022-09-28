import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogService } from './dogs.service';
import { DogsService } from './dogs/dogs.service';


@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, DogService, DogsService],
})
export class AppModule {}
