import React from 'react';
import Header from '../../../components/header/header.js';

describe('<Header />', () => {
  it('Contains a Header tag', () => {
    let app = shallow(<Header />);
    expect(app.find('header').exists()).toBeTruthy();
  });
});
