import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { DataContext } from '../DataProvider/dataProvider';
import SearchBar from './searchBar';

test('Dropdown renders correct options based on user input using onChange directly', async () => {

  const mockContext = {
    setsearchData: "New York",
    cityName: [
      { id: 1, name: 'New York, New York, US' },
    ],
  };

  render(
    <DataContext.Provider value={mockContext}>
      <SearchBar />
    </DataContext.Provider>
  );
  const inputElement = screen.getByPlaceholderText('City Search');
  expect(inputElement).toBeInTheDocument();
  const options = await screen.findAllByRole('listitem');
  expect(options).toHaveLength(1);
  expect(options[0]).toHaveTextContent('New York, New York, US');
})



