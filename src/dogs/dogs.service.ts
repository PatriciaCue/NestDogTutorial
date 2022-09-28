import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { Dog } from './interfaces/dog.interface'
import { ListAllResponse } from './interfaces/listallResponse.interface';
import { RandomImageResponse } from './interfaces/randomImageResponse';

@Injectable()
export class DogsService {
  private readonly dogs: Dog[] = [];

  create(dog: Dog) {
    this.dogs.push(dog);
  }

  findAll(): Dog[] {
    return this.dogs;
  }


  async getRandomImage(): Promise<string> {
    const result=await axios.get('https://dog.ceo/api/breeds/image/random');
    console.log(result.data, 'result');
    const randomImageData: RandomImageResponse =result.data;
    //return 'randomImageData.message';
    return randomImageData.message;
  }

  /*
  async getlistAllBreeds (): Promise<string>{
    const result=await axios.get('https://dog.ceo/api/breeds/list/all');
    const listAllBreeds: ListAllResponse =result.data;
    console.log('result.data INFO', result.data);

    //---Me devuelve un array de strings---//
    var nomrazas:string[]=Object.keys(listAllBreeds.message);
    var subrazas:string[]=Object.values(listAllBreeds.message);
    
    var misPerros : Array<Dog>=[];

    nomrazas.forEach(function(elemento, indice, array) {
        let miRaza = new Dog(elemento,[],0);
        miRaza.nombreRaza=elemento;
        
        if (subrazas[indice]=='') {
          miRaza.subraza=[];
          miRaza.totalsubrazas=0;
        } else {
          miRaza.subraza.push(subrazas[indice]);
          miRaza.totalsubrazas=subrazas[indice].length;
        }
        
        misRazas.push(miRaza);

    });

    misRazas.forEach(e => {
      console.log('El tipo de raza es' , e.nombreRaza);
      e.subraza.forEach(ele => {
        console.log('Subraza ', ele);
      });
    });

    
    return 'randomImageData.message';
  }
  */
}

