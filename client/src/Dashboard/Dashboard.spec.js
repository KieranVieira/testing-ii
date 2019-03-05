import React from 'react';
import { render, fire, fireEvent } from 'react-testing-library'
import 'jest-dom/extend-expect'

import Dashboard from '../Dashboard/Dashboard';
import Display from '../Display/Display';

describe('<Dashboard />', () => {
    it('Should change balls on display on click', () => {
        const { getByText } = render(<Dashboard/>)

        const ballBtn = getByText(/ball/i)

        fireEvent.click(ballBtn)

        expect(render(<Display/>).getByText(/balls: 1/i)).toBeInTheDocument()
    });
});