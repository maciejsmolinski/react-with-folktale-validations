import Component from './';
import Enzyme, { shallow } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('ValidationMessages', () => {
  it('should be defined', () => {
    expect(Component).toBeDefined();
  });

  it('should render no validation messages if no data is provided', () => {
    let subject = shallow(<Component />);
    expect(subject.text()).toBe('');
  });

  it('should render a single validation message', () => {
    let subject = shallow(
      <Component messages={['Validation Failed']} />
    );
    expect(subject.text()).toBe('Validation Failed');
  });

  it('should render a multiple validation messages', () => {
    let subject = shallow(
      <Component messages={['First Failed', 'Second Failed']} />
    );
    expect(subject.text()).toContain('First Failed');
    expect(subject.text()).toContain('Second Failed');
  });

  it('should pass properties to child components', () => {
    let subject = shallow(
      <Component
        messages={['First Failed', 'Second Failed']}
        className="message"
      />
    );

    expect(subject.find('.message')).toHaveLength(2);
  });
});
