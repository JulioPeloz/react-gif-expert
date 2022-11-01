import { getGifs } from "../../helpers/getGifs"

describe('Tests de getGifs', () => { 
    test('Debe retornar un arreglo de gifs', async() => { 
         const gifs = await getGifs('Harry Potter');
         expect( gifs.length ).toBeGreaterThan(0);
         expect( gifs[0] ).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
         });
     })
 })