import { Breed } from "../dto/breed.dto";
import { Breeds } from "../dto/breeds.dto";
import { ListAllBreedsResponseRaw } from "../dto/listAllBreedsResponseRaw.dto";
import { SubBreed } from "../dto/subbreed.dto";


export class GetlistAllBreedsRawToBreeds{
  map(listAllBreedsResponseRaw:ListAllBreedsResponseRaw) {
    
    let breeds=new Breeds();
    breeds.breeds=[];
    //Devuelve clave valor
    Object.entries(listAllBreedsResponseRaw.message).forEach((breedRaw,i) => {
      const breed= new Breed();
      breed.name=breedRaw[0];
      breed.subbreeds=[];
    
      breedRaw[1].forEach(subbreedname => {
        const subbreed= new SubBreed();
        subbreed.name=subbreedname;
        breed.subbreeds.push(subbreed);
      });

      breeds.breeds.push(breed);
    
    });
    
    return breeds;
  }
}

export const getlistAllBreedsRawToBreeds = new GetlistAllBreedsRawToBreeds();