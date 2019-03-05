import React from 'react';
import { render } from 'react-testing-library';

import App from './App';
import Display from './Display/Display';
import Dashboard from './Dashboard/Dashboard';

describe('<App/>', () => {
  it('renders without crashing', () => {
    render(<App />);
  });
});

describe('<Display/>', () => {
  it('renders without crashing', () => {
    render(<Display />);
  });
  it('Should render ', () => {
    
  });
});

describe('<Dashboard/>', () => {
  it('renders without crashing', () => {
    render(<Dashboard />);
  });
});