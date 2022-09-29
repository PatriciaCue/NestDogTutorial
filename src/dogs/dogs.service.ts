import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { Breed } from './dto/breed.dto';
import { Breeds } from './dto/breeds.dto';
import { DogImage } from './dto/dogimage.dto';
import { ListAllBreedsResponseRaw } from './dto/listAllBreedsResponseRaw.dto';
import { ListAllSubBreedsResponseRaw } from './dto/listAllSubBreedsResponseRaw.dto';
import { RandomImageResponseRaw } from './dto/randomImageResponseRaw.dto';
import { getlistAllBreedsRawToBreeds } from './mappers/getListAllBreedsRawToBreeds.mapper';
import { getlistAllSubBreedsRawToSubBreeds } from './mappers/getListAllSubBreedsRawToSubBreed.mapper';

@Injectable()
export class DogsService {
  
  async getRandomImage(): Promise<string> {
    const result=await axios.get('https://dog.ceo/api/breeds/image/random');
    const randomImageData: RandomImageResponseRaw =result.data;
    //const dogImage:DogImage ={image:randomImageData.message[0]};
    const dogImage:DogImage ={image:[randomImageData.message[0]]};
    //dogImage.image.push(randomImageData.message[0]);
    return dogImage.image[0];
  }

  async getlistAllBreeds (): Promise<Breeds>{
    const result=await axios.get('https://dog.ceo/api/breeds/list/all');
    const listAllBreedsRawResponse: ListAllBreedsResponseRaw =result.data;
    return getlistAllBreedsRawToBreeds.map(listAllBreedsRawResponse);
  }
  
  async getlistsubBreeds(breed:string): Promise<Breed>{
    const result=await axios.get(`https://dog.ceo/api/breed/${breed}/list`);
    const listAllSubBreedsResponseRaw:ListAllSubBreedsResponseRaw = result.data;
    return getlistAllSubBreedsRawToSubBreeds.map(listAllSubBreedsResponseRaw,breed);
  }
/*
  async getImageListOfABreed(breed:string): Promise<string[]>{
    const result=await axios.get(`https://dog.ceo/api/breed/${breed}/images`);
    const randomImageData: RandomImageResponseRaw =result.data;
    const dogImage:DogImage ={image:[]};
    randomImageData.message.forEach(dogimage => {
      dogImage.image.push(dogimage);
    });
    console.log(dogImage.image,'dogImage.image');
    return dogImage.image;
  }
  */

  async getImageListOfABreed(breed:string): Promise<DogImage>{
    const result=await axios.get(`https://dog.ceo/api/breed/${breed}/images`);
    const randomImageData: RandomImageResponseRaw =result.data;
    const dogImage:DogImage ={image:[]};
    randomImageData.message.forEach(dogimage => {
      dogImage.image.push(dogimage);
    });
    console.log(dogImage.image,'dogImage.image');
    return dogImage;
  }
}

