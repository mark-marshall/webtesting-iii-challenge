// ### Display Component

// - displays if gate is open/closed and if it is locked/unlocked
// - displays 'Closed' if the `closed` prop is `true` and 'Open' if otherwise (Done)
// - displays 'Locked' if the `locked` prop is `true` and 'Unlocked' if otherwise (Done)
// - when `locked` or `closed` use the `red-led` class
// - when `unlocked` or `open` use the `green-led` class

import React from 'react';
import * as rt from 'react-testing-library';

import Display from './Display';

afterEach(rt.cleanup);

describe('<Display />', () => {
  it('displays closed when the closed prop is true', () => {
    const wrap = rt.render(<Display closed={true} />);
    expect(wrap.getAllByText(/closed/i));
  });
  it('displays open when the closed prop is false', () => {
    const wrap = rt.render(<Display closed={false} />);
    expect(wrap.getAllByText(/open/i));
  });
  it('displays open when the closed prop is falsy', () => {
    const wrap = rt.render(<Display closed={0} />);
    expect(wrap.getAllByText(/open/i));
  });
  it('displays locked when the locked prop is true', () => {
    const wrap = rt.render(<Display locked={true} />);
    expect(wrap.getAllByText(/locked/i));
  });
  it('displays unlocked when the locked prop is false', () => {
    const wrap = rt.render(<Display locked={false} />);
    expect(wrap.getAllByText(/unlocked/i));
  });
  it('displays unlocked when the locked prop is falsy', () => {
    const wrap = rt.render(<Display locked={0} />);
    expect(wrap.getAllByText(/unlocked/i));
  });
//   it('uses the red-led class when locked', () => {
//     const wrap = rt.render(<Display locked={true}/>);
//   });
//   it('uses the red-led class when closed', () => {
//     const wrap = rt.render(<Display closed={true}/>);
//   });
//   it('uses the green-led class when unlocked', () => {
//     const wrap = rt.render(<Display locked={false}/>);
//   });
//   it('uses the green-led class when open', () => {
//     const wrap = rt.render(<Display closed={false}/>);
//   });
});
