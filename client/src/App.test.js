import React from 'react';
import { render } from 'react-testing-library';

import App from './App';
import Dashboard from './Dashboard/Dashboard';

describe('<App/>', () => {
  it('renders without crashing', () => {
    render(<App />);
  });
});