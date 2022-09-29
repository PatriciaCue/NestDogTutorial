import { Breed } from "../dto/breed.dto";
import { Breeds } from "../dto/breeds.dto";
import { ListAllResponse } from "../interfaces/listallResponse.interface";


export class GetlistAllBreedsRawToBreeds{
  map(listAllBreeds:ListAllResponse) {
    
    let breeds=new Breeds();
    breeds.breeds=[];
    //Devuelve clave valor
    Object.entries(listAllBreeds.message).forEach((breedRaw,i) => {
      const breed= new Breed();
      
      breed.name=breedRaw[0];
      breed.subbreeds=breedRaw[1];
      breeds.breeds.push(breed);
    });
    return breeds;
  }
}

export const getlistAllBreedsRawToBreeds = new GetlistAllBreedsRawToBreeds();