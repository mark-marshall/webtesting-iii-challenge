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
    })
    it('renders the display - lockedDiv', () => {
        const wrap = rt.render(<Dashboard />);
        expect(wrap.getByTestId(/lockedDiv/i));
    })
    it('renders the display - closedDiv', () => {
        const wrap = rt.render(<Dashboard />);
        expect(wrap.getByTestId(/closedDiv/i));
    })
    it('renders the controls', () => {
        const wrap = rt.render(<Dashboard />);
        expect(wrap.getByTestId(/displayDiv/i));
    })
    it('renders the controls - lockedButton', () => {
        const wrap = rt.render(<Dashboard />);
        expect(wrap.getByTestId(/lockedButton/i));
    })
    it('renders the controls - closedButton', () => {
        const wrap = rt.render(<Dashboard />);
        expect(wrap.getByTestId(/closedButton/i));
    })
})
