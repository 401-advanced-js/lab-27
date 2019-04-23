import React from 'react';
import renderer from 'react-test-renderer';
import Counter from '../../../components/counter/counter.js';

describe('<Counter />', () => {
  it('Buttons exist in this component', () => {
    let app = shallow(<Counter />);
    expect(app.find('button').exists()).toBeTruthy();
  });

  it('Toggles stuff on click', () => {
    let app = mount(<Counter />);
    // Getting the component

    let increment = app.find('#increment');
    // Button is the button that will change the app state

    increment.simulate('click');
    expect(app.state('counter')).toEqual(1);
  });
  it('Should decrement the counter', () => {
    let app = mount(<Counter />);
    let decrement = app.find('#decrement');

    decrement.simulate('click');
    decrement.simulate('click');
    expect(app.state('counter')).toEqual(-2);
  });
});
