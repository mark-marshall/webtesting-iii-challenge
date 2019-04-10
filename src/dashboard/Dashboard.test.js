// ### Dashboard

// - shows the controls and display (Done)

import React from 'react';
import * as rt from 'react-testing-library';

import Dashboard from './Dashboard';

afterEach(rt.cleanup);

describe('<Dashboard />', () => {
    it('renders the display', () => {
        const wrap = rt.render(<Dashboard />);
        expect(wrap.getByTestId(/displayDiv/i));
        expect(wrap.asFragment()).toMatchSnapshot();
    })
    it('renders the controls', () => {
        const wrap = rt.render(<Dashboard />);
        expect(wrap.getByTestId(/displayDiv/i));
        expect(wrap.asFragment()).toMatchSnapshot();
    })
})
