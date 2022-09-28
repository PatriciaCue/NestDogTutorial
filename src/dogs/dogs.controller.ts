import { Controller, Get } from '@nestjs/common';
import { DogsService } from './dogs.service';

@Controller('dogs')
export class DogsController {

  constructor(private readonly dogsService:DogsService){}

  @Get()
  findAll(): string {
    return 'This action returns all dogs';
  }


  //ENDPOINT randomImage
  @Get('randomImage')
  async getRandomImage(): Promise<string> {
    return await this.dogsService.getRandomImage();
  }

  //ENDPOINT listAllBreeds 
  
  @Get('listAllBreeds')
  async listAllBreeds(): Promise<string> {
    return await this.dogsService.getlistAllBreeds();
  }
  
}