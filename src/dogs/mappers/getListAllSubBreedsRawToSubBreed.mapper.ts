import { Breed } from "../dto/breed.dto";
import { ListAllSubBreedsResponseRaw } from "../dto/listAllSubBreedsResponseRaw.dto";
import { SubBreed } from "../dto/subbreed.dto";

export class GetlistAllSubBreedsRawToSubBreeds{
  map(listAllSubBreedsResponseRaw:ListAllSubBreedsResponseRaw, breedname:string) {
    
    const breed= new Breed();
      breed.name=breedname;
      breed.subbreeds=[];

    listAllSubBreedsResponseRaw.message.forEach(subbreedname => {
      const subbreed= new SubBreed();
      subbreed.name=subbreedname;
      breed.subbreeds.push(subbreed);
    });
    return breed;
  }
}

export const getlistAllSubBreedsRawToSubBreeds = new GetlistAllSubBreedsRawToSubBreeds();