export interface RandomImageResponse{

  //La API de perros en el ENDPOINT Random image
  //Devuelve un string con una imagen y status
  /**
   * URL --> https://dog.ceo/api/breeds/image/random
   * JSON
   * {
        "message": "https://images.dog.ceo/breeds/hound-ibizan/n02091244_2542.jpg",
        "status": "success"
      }
   */
  message: string;
  status: string;

}