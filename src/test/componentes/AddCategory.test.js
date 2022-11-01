import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../componentes"

describe('Tests de AddCategory', () => { 
    test('debe de cambiar el valor de la caja de texto', () => { 
        render(<AddCategory onNewCategory={() => {}}/>);
        const input = screen.getByRole('textbox');

        fireEvent.input(input, { target: {value: 'Saitama'} });
        expect(input.value).toBe('Saitama');
     })

    test('Debe llamar a onNewCategory si el input tiene un valor', () => { 
        const inputValue = 'Spider-man';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory}/>);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: {value: inputValue} });
        fireEvent.submit(form);

        expect(input.value).toBe('');

        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toBeCalledWith(inputValue);
     })

    test('No debe llamar a onNewCategory si el input está vacío', () => { 
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory}/>);

        const form = screen.getByRole('form');

        fireEvent.submit(form);

        // Ambas formas son dos maneras de hacer lo mismo
        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled();
     })
 })