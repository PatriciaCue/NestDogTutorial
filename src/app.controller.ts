import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { DogsService } from './dogs/dogs.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private dogsService: DogsService) {}

  @Get('algo')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  getAdios(): string {
    return this.appService.getAdios();
  }


  /*
  @Get('randomImage')
  async getRandomImage(): Promise<string> {
    return await this.dogService.getRandomImage();
  }

  @Get('listAllBreeds')
  async listAllBreeds(): Promise<string> {
    return await this.dogService.getlistAllBreeds();
  }
  */

}
