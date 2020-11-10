import * as React from 'react';
import { render } from '@testing-library/react';
import FetchMock from 'jest-fetch-mock';
import Pokedex from '../components/Pokedex';

describe('Pokedex component', () => {

  beforeEach(() => {
    FetchMock.resetMocks();
  });

  const text = 'Pokedex - Gotta catch\'em all!';
  
  it('renders correct text', async () => {
    const { findByText } = render(
      <Pokedex />
    );
    await findByText(text);
  });

  it('renders correct properties of the fetched data', async () => {
    const mockData = getMockData();
    FetchMock.once(JSON.stringify(mockData))

    const { findAllByText, container } = render(
      <Pokedex />
    );

   const pokedexProperty = await findAllByText('charmander');
   expect(pokedexProperty).toHaveLength(1);

  });

  const getMockData = () => {
    return [{name: "picachu", url: "foo/1/"}, {name: "charmander", url: "foo/2/"}]
  }
});