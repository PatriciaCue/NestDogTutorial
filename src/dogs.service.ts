import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { RandomImageResponse } from './dogs.api.interface';
import { Raza } from './entities/raza.entity';
 

@Injectable()
export class DogService {

 /*
  async getRandomImage(): Promise<string> {
    const result=await axios.get('https://dog.ceo/api/breeds/image/random');
    console.log(result.data, 'result');
    const randomImageData: RandomImageResponse =result.data;
    return 'randomImageData.message';
    //return randomImageData.message;
  }

  async getlistAllBreeds (): Promise<string>{
    const result=await axios.get('https://dog.ceo/api/breeds/list/all');
    const randomImageData: RandomImageResponse =result.data;
    console.log('result.data INFO', result.data);

    //---Me devuelve un array de strings---//
    var nomrazas:string[]=Object.keys(randomImageData.message);
    var subrazas:string[]=Object.values(randomImageData.message);
    
    var misRazas : Array<Raza>=[];

    nomrazas.forEach(function(elemento, indice, array) {
        let miRaza = new Raza(elemento,[],0);
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