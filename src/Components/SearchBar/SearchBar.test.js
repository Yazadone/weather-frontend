import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { DataProvider } from "../DataProvider/dataProvider";
import SearchBar from "./searchBar";

test("City Search Input: Verify that there is a text input which allows user to enter the City name", () => {
  render(
    <DataProvider>
      <SearchBar />
    </DataProvider>
  );

  const inputElement = screen.getByPlaceholderText("City Search");
  expect(inputElement).toBeInTheDocument();
});
