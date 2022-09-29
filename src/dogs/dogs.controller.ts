import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DogsService } from './dogs.service';
import { Breed } from './dto/breed.dto';
import { Breeds } from './dto/breeds.dto';
import { DogImage } from './dto/dogimage.dto';


@ApiTags('perretes')
@Controller('dogs')
export class DogsController {

  constructor(private readonly dogsService:DogsService){}

  @Get()
  findAll(): string {
    return 'This action returns all dogs';
  }

  //ENDPOINT randomImage
  @ApiOperation({summary:'Show randomImage'})
  @ApiResponse({
    status:200,
    description: 'The found record, message and status',
    //type:Dog,
  })
  @Get('randomImage')
  async getRandomImage(): Promise<string> {
    return await this.dogsService.getRandomImage();
  }

  //ENDPOINT listAllBreeds 
  @Get('listAllBreeds')
  async listAllBreeds(): Promise<Breeds> {
    return await this.dogsService.getlistAllBreeds();
  }
  
  @Get('listsubBreeds/:breed')
  async listsubBreeds(@Param ('breed') breed: string): Promise<Breed>{
    return await this.dogsService.getlistsubBreeds(breed);
  }
  
  @Get('imageBreed/:breed')
  async imageBreed(@Param ('breed') breed: string): Promise<DogImage>{
    return await this.dogsService.getImageListOfABreed(breed);
  }
  
}