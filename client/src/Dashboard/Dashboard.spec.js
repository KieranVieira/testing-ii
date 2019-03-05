import React from 'react';
import { render, fire, fireEvent } from 'react-testing-library'
import 'jest-dom/extend-expect'

import Dashboard from '../Dashboard/Dashboard';

describe('<Dashboard />', () => {
    it('Should display Buttons', () => {
        const { getByText } = render(<Dashboard />);

        const strike = getByText(/strike/i);
        const ball = getByText(/ball/i);
        const foul = getByText(/foul/i);
        const hit = getByText(/hit/i);
        
        expect(strike).toBeInTheDocument();
        expect(ball).toBeInTheDocument();
        expect(foul).toBeInTheDocument();
        expect(hit).toBeInTheDocument();
    });
});