import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
  const category = 'One Punch';
  test('Debe mostrar el loading inicialmente', () => {
    useFetchGifs.mockReturnValue([
      [],
      true,
    ]);
    render(<GifGrid category={category} />);
    expect(screen.getByText('Cargando...'));
    expect(screen.getByText(category));
  });
  test('Debe mostrar items cuando se cargan los imagenes de useFetchGifs', () => {
    const gifs = [
      {
        id: 'abc',
        title: 'abc',
        url: 'https://abc.com',
      },
      {
        id: 'cde',
        title: 'cde',
        url: 'https://cde.com',
      },
    ];
    useFetchGifs.mockReturnValue([
      gifs,
      false,
    ]);
    render(<GifGrid category={category} />);
    expect(screen.getAllByRole('img').length).toBe(2);
  });
});
