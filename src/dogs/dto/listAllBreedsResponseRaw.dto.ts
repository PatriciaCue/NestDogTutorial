import { ApiProperty } from "@nestjs/swagger";

export class ListAllBreedsResponseRaw{

  //Dto entrada de datos
  //La Api de perros en el endpoint List all breeds
  //Devuelve un objeto con todas las razas y subrazas de perros
  //y status
  @ApiProperty(
    {example:'{"bulldog":["english","french","boston"]}', 
    description:'Returns breeds and subbreeds'}
    )
  message: Object;
  status: string;

}