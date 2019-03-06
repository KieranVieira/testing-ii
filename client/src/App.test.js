import React from 'react';
import { render, fireEvent } from 'react-testing-library';

import App from './App';
import Dashboard from './Dashboard/Dashboard';

describe('<App/>', () => {
  it('renders without crashing', () => {
    render(<App />);
  });

  it('Should update strikes when clicked', () => {
    const { getByTestId } = render(<App />)

    const strikeButton = getByTestId(/strikeBtn/i);

    fireEvent.click(strikeButton)

    expect(getByTestId(/strikes-count/i).textContent).toBe("Strikes: 1")
  });

  it('Should update balls when clicked', () => {
    const { getByTestId } = render(<App />)

    const strikeButton = getByTestId(/ballBtn/i);

    fireEvent.click(strikeButton)

    expect(getByTestId(/balls-count/i).textContent).toBe("Balls: 1")
  });

  it('Should reset balls/strikes if balls = 4 or strikes = 3', () => {
    const { getByTestId } = render(<App />)

    const strikeButton = getByTestId(/strikeBtn/i);
    const ballButton = getByTestId(/ballBtn/i);

    fireEvent.click(strikeButton)
    fireEvent.click(strikeButton)
    fireEvent.click(strikeButton)
    fireEvent.click(ballButton)
    fireEvent.click(ballButton)
    fireEvent.click(ballButton)
    fireEvent.click(ballButton)

    expect(getByTestId(/strikes-count/i).textContent).toBe("Strikes: 0")
    expect(getByTestId(/balls-count/i).textContent).toBe("Balls: 0")
  });
});