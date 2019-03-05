import React from 'react';
import { render } from 'react-testing-library';

import App from './App';

describe('<App/>', () => {
  it('renders without crashing', () => {
    render(<App />);
  });
});
describe('<Dashboard/>', () => {
  it('renders without crashing', () => {
    render(<App />);
  });
});
describe('<Display/>', () => {
  it('renders without crashing', () => {
    render(<App />);
  });
});
