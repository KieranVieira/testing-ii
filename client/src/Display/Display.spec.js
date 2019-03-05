import React from 'react';
import { render } from 'react-testing-library'
import 'jest-dom/extend-expect'

import Display from '../Display/Display';

describe('<Display/>', () => {
    it('Should render given prop numbers', () => {
        const { getByText } = render(<Display balls={3} strikes={2}/>);

        const ballsText = getByText(/balls: 3/i)
        const strikesText = getByText(/strikes: 2/i)

        expect(ballsText).toBeInTheDocument();
        expect(strikesText).toBeInTheDocument();
    });
});