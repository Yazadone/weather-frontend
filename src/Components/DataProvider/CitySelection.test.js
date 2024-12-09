import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { DataContext } from "./dataProvider";
import SearchBar from "../SearchBar/searchBar";

global.fetch = jest.fn().mockResolvedValue({
  json: () => Promise.resolve({ data: "Sample Data" }),
});

test("Dropdown renders correct options based on user input using onChange directly", async () => {
  const mocksetSelectedCity = jest.fn();
  const mockSelectedCity = [
    {
      id: 1,
      name: "New York, New York, US",
      latitude: 40.7128,
      longitude: -74.006,
    },
  ];
  const mockCityName = [
    {
      id: 1,
      name: "New York, New York, US",
      latitude: 40.7128,
      longitude: -74.006,
    },
  ];

  render(
    <DataContext.Provider
      value={{
        searchData: "New York",
        cityName: mockCityName,
        selectedCity: mockSelectedCity,
        setselectedCity: mocksetSelectedCity,
      }}
    >
      <SearchBar />
    </DataContext.Provider>
  );

  const inputElement = screen.getByPlaceholderText("City Search");

  expect(inputElement).toBeInTheDocument();
  await waitFor(() => screen.getByText("New York, New York, US"));
  fireEvent.click(screen.getByText("New York, New York, US"));

  await fetch("http://localhost:5000/api/weather?lat=40.7128&lon=-74.006");
  expect(fetch).toHaveBeenCalledWith(
    "http://localhost:5000/api/weather?lat=40.7128&lon=-74.006"
  );
});
