import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../componentes";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock("../../hooks/useFetchGifs");

describe('Tests del GifGrid', () => { 

    const category = 'Mistborn';

    test('Debe de mostrar el Loading inicialmente', () => { 

        useFetchGifs.mockReturnValue({
            images:[],
            isLoading: true
        })

        render(<GifGrid category={category}/>);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
     })

    test('Debe de mostrar items cuando se cargan las imagenes del useFetch', () => { 

        const gifs = [{
            id: 'ABC',
            title: 'Kelsier',
            url: 'https://localhost/kelsier.jpg'
        },
        {
            id: 'DEF',
            title: 'Vin',
            url: 'https://localhost/vin.jpg'
        },];

        useFetchGifs.mockReturnValue({
            images:gifs,
            isLoading: false
        })

        render(<GifGrid category={category}/>);
        expect(screen.getAllByRole('img').length).toBe(2)
     })

 })