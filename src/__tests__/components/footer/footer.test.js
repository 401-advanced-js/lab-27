import React from 'react';
import Footer from '../../../components/footer/footer.js';

describe('<Footer />', () => {
  it('Contains a Footer tag', () => {
    let app = shallow(<Footer />);
    expect(app.find('footer').exists()).toBeTruthy();
  });
});
