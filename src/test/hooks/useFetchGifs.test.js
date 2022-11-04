import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../hooks/useFetchGifs"

describe('Tests del  hook useFetchGifs', () => { 
    test('Debe regresar el estado inicial', () => { 

        const {result} = renderHook( () => useFetchGifs('Spider-Man'))
        const{images, isLoading} = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
     });

     test('Debe regresar un arreglo de imágenes y el isLoading en False', async() => { 

        const {result} = renderHook( () => useFetchGifs('Spider-Man'))
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        );

        const{images, isLoading} = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
     });
 })