import React, { useContext, useEffect } from "react";
import { render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { DataProvider, DataContext } from "./dataProvider";

global.fetch = jest.fn();

beforeEach(() => {
  jest.spyOn(console, "log").mockImplementation(() => {});
});

afterEach(() => {
  console.log.mockRestore();
});

test("logs an error message if the API request fails", async () => {
  fetch.mockImplementationOnce(() => Promise.reject(new Error("API is down")));

  const TestComponent = () => {
    const { setsearchData } = useContext(DataContext);

    useEffect(() => {
      setsearchData("test city");
    }, [setsearchData]);

    return <div>Test Component</div>;
  };

  render(
    <DataProvider>
      <TestComponent />
    </DataProvider>
  );

  await waitFor(() => {
    expect(console.log).toHaveBeenCalledWith(new Error("API is down"));
  });
});
