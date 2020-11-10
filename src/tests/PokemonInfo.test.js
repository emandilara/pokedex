import * as React from "react";
import { getByText, render } from "@testing-library/react";
import FetchMock from "jest-fetch-mock";
import PokemonInfo from "../components/PokemonInfo";

describe("PokemonInfo component", () => {

  beforeEach(() => {
    FetchMock.resetMocks();
  });

  it("renders correct properties of the fetched data", async () => {
    const mockParams = getMockParams();
    const mockData = getMockData();
    FetchMock.once(JSON.stringify(mockData))

    const { findAllByText } = render(
      <PokemonInfo name={mockParams.name} url={mockParams.url} />
    );

    const heightText = await findAllByText(/Height/);
    expect(heightText).toHaveLength(1);

  });

  const getMockParams = () => {
    return {
      name: "pikachu",
      url: "https://pokeapi.co/api/v2/ability/1/"
    }
  };

  const getMockData = () => {
    return {
      name: "pikachu",
      height: 5,
      order: 1,
      base_experience: 2,
      abilities: [
        {
          ability: {
            name: "overgrow",
            url: "https://pokeapi.co/api/v2/ability/65/"
          },
          is_hidden: false,
          slot: 1
        },
        {
          ability: {
            name: "chlorophyll",
            url: "https://pokeapi.co/api/v2/ability/34/"
          },
          is_hidden: true,
          slot: 3
        }
      ]
    }
  }
});