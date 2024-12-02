import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { DataProvider } from '../DataProvider/dataProvider';
import SearchBar from './searchBar';

test('City Search Input: Verify that there is a text input which allows user to enter the City name', () => {
  render(
    <DataProvider>
      <SearchBar />
    </DataProvider>
  );

  // Verify that the input element is in the document
  const inputElement = screen.getByRole('textbox', { name: /searchbar/i });
  expect(inputElement).toBeInTheDocument();

  // Verify that the input element is of type text
  expect(inputElement).toHaveAttribute('type', 'text');
});
