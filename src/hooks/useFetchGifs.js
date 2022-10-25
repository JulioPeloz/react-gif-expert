import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async () => {
      const newImages = await getGifs(category);
      setImages(newImages);
      setIsLoading(false);
    } 

    useEffect(() => {
        getImages();
      
    }, [ ]) //Los corchetes vacíos significan que este hook solo se va a disparar la primera vez que se crea el componente.
    

  return {
    images: images,
    isLoading: isLoading,
  }
}
