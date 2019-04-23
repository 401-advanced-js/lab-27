# React Testing

## Import
* enzyme
* enzyme-adapter-react-16
* react
* react-dom
* react-scripts
* react-test-renderer
---
## In setupTests.js
This sets up the same imports to be used globally across all your tests. These variables can be referenced everywhere. Lives in your src folder
```
import Enzyme, {shallow,render,mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter:new Adapter()});

global.shallow = shallow;
global.render = render;
global.mount = mount;
global.rootDirectory = __dirname;
```
Globally uses these imports everywhere, meaning your tests can reference global.shallow everywhere.

---
## Testing
```
/ __tests__
  / src
    / components
      / thing
        - thing.test.js
/ components
  / thing
    - thing.js
    - thing.scss
- setupTests.js
```

In thing.test.js
```
import React from 'react';
import renderer from 'react-test-renderer';
import Thing from '../../../../components/thing/thing.js';

describe('<Thing />', () => {
  it('is alive at application start', () => {
    let app = shallow(<Thing />);
    expect(app.find('span').exists()).toBeTruthy();
  });
  
  it('Toggles stuff on click', () => {

    let app = mount(<Thing />); 
    // Getting the component

    let button = app.find('button'); 
    // Button is the button that will change the app state

    //-----CLICK ONE-----//
    button.simulate('click');
    expect(app.state('stuff')).toBe(false);
    expect(app.state('polarity')).toEqual('negative');
    expect(app.find('span').text()).toContain('false');

    //-----CLICK TWO-----//
    button.simulate('click');
    expect(app.state('stuff')).toBe(true);
    expect(app.state('polarity')).toEqual('positive');
    expect(app.find('span').text()).toContain('true');
  });

  it('renders right', () => {
    const tree = renderer.create(<Thing />).toJson();
    expect(tree).toMatchSnapshot();
  });

});
```
---
**Differences in modules**<br>
You want to test functionality like above, use enzyme<br>
Snapshot testing keeps your markup consistent<br>
*TRAVIS WILL NOT RUN SNAPSHOTS*
