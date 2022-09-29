import { ClassSerializerInterceptor, Injectable } from '@nestjs/common';
import axios from 'axios';
import { Breed } from './dto/breed.dto';
import { Breeds } from './dto/breeds.dto';
//import { Dog } from './interfaces/dog.interface'
import { ListAllResponse } from './interfaces/listallResponse.interface';
import { RandomImageResponse } from './interfaces/randomImageResponse';
import { getlistAllBreedsRawToBreeds } from './mappers/getListAllBreedsRawToBreeds.mapper';

@Injectable()
export class DogsService {
  //private readonly dogs: Dog[] = [];
/*
  create(dog: Dog) {
    this.dogs.push(dog);
  }

  findAll(): Dog[] {
    return this.dogs;
  }
*/

  async getRandomImage(): Promise<string> {
    const result=await axios.get('https://dog.ceo/api/breeds/image/random');
    console.log(result.data, 'result');
    const randomImageData: RandomImageResponse =result.data;
    return randomImageData.message;
  }

  
  async getlistAllBreeds (): Promise<Breeds>{
    const result=await axios.get('https://dog.ceo/api/breeds/list/all');
    const listAllBreeds: ListAllResponse =result.data;
    //console.log('result.data INFO', result.data);

    
      
      return getlistAllBreedsRawToBreeds.map(listAllBreeds);
    
    /*
    //---Me devuelve un array de strings---//
    const nomrazas:string[]=Object.keys(listAllBreeds.message);
    const subrazas:string[]=Object.values(listAllBreeds.message);
    
    console.log(nomrazas,'nomrazas');
    console.log(subrazas,'subrazas');
    
    const misPerros : Array<Dog>=[];
    const finalBreedsOutput: Dog[] =[];
  
    nomrazas.forEach((e,i) => {
      console.log(`El nombre de la raza es ${e}, ${i}`);
      let perro: Dog={
        nombreRaza:'',
        subraza:[] ,
        totalsubrazas:0
      }
      perro.nombreRaza=e;
      if (subrazas[i]==''){
        console.log(subrazas[i],'subrazas[i]');
        perro.subraza=[];
        perro.totalsubrazas=0;
      }else{
        perro.subraza.push(subrazas[i]);
        perro.totalsubrazas=subrazas[i].length;
      }
      misPerros.push(perro);
    });

    console.log(misPerros,'misPerros');    
    return misPerros;
  */
  }
  

  async listsubBreeds(breed:string): Promise<any>{
    const result=await axios.get(`https://dog.ceo/api/breed/${breed}/list`);
    console.log(result.data, 'result');
    return result.data;
  }

  /*
  async listsubBreeds(): Promise<any>{
    const result=await axios.get('https://dog.ceo/api/breed/hound/list');
    console.log(result.data, 'result');
    return result.data;
  }
  */
}

