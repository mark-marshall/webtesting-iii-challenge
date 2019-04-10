// ### Controls Component

// - provide buttons to toggle the `closed` and `locked` states. (Done)
// - buttons' text changes to reflect the state the door will be in if clicked (Done)
// - the closed toggle button is disabled if the gate is closed (Done)
// - the locked toggle button is disabled if the gate is open (Done)

import React from 'react';
import * as rt from 'react-testing-library';

import Controls from './Controls';

afterEach(rt.cleanup);

describe('<Controls />', () => {
  it('renders button for controling the closed state', () => {
    const wrap = rt.render(<Controls />);
    expect(wrap.getByTestId(/closedButton/i));
  });
  it('renders button for controling the locked state', () => {
    const wrap = rt.render(<Controls />);
    expect(wrap.getByTestId(/lockedButton/i));
  });
  it('close/open button set to open gate if the door is in closed state', () => {
    const wrap = rt.render(<Controls closed={true} />);
    expect(wrap.getByText(/open gate/i));
  });
  it('close/open button is disabled if the gate is locked', () => {
    const wrap = rt.render(<Controls closed={true} locked={true} />);
    const coButton = wrap.queryByTestId(/closedButton/i);
    expect(coButton.disabled).toBeTruthy();
  });
  it('lock/unlock button is disabled if the gate is open', () => {
    const wrap = rt.render(<Controls closed={false} />);
    const luButton = wrap.queryByTestId(/lockedButton/i);
    expect(luButton.disabled).toBeTruthy();
  });
});
