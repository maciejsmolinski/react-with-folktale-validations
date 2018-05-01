import * as inputs from './';
import Enzyme, { shallow } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Input', () => {
  describe('Password', () => {
    let Component;

    beforeEach(() => {
      Component = inputs.Password;
    });

    it('should be defined', () => {
      expect(Component).toBeDefined();
    });

    it('should render an input', () => {
      let subject = shallow(<Component />);

      expect(subject.find('input')).toHaveLength(1);
    });

    it('should render an input of type password', () => {
      let subject = shallow(<Component />);

      expect(subject.find('input').prop('type')).toBe(
        'password'
      );
    });

    it('should render an input with id "password"', () => {
      let subject = shallow(<Component />);

      expect(subject.find('input').prop('id')).toBe('password');
    });

    it('should render an input with placeholder set to "Password"', () => {
      let subject = shallow(<Component />);

      expect(subject.find('input').prop('placeholder')).toBe(
        'Password'
      );
    });

    it('should render a label', () => {
      let subject = shallow(<Component />);

      expect(subject.find('label')).toHaveLength(1);
    });

    it('should render a label with text "Password"', () => {
      let subject = shallow(<Component />);

      expect(subject.find('label').text()).toContain('Password');
    });

    it('should render a label pointing to the password field', () => {
      let subject = shallow(<Component />);

      expect(subject.find('label').prop('htmlFor')).toBe(
        'password'
      );
    });

    it('should assign onChange property to the input field and call it', () => {
      let callback = jest.fn();
      let subject = shallow(<Component onChange={callback} />);

      expect(callback).not.toHaveBeenCalled();
      subject.find('input').simulate('change');
      expect(callback).toHaveBeenCalled();
    });
  });

  describe('Username', () => {
    let Component;

    beforeEach(() => {
      Component = inputs.Username;
    });

    it('should be defined', () => {
      expect(Component).toBeDefined();
    });

    it('should render an input', () => {
      let subject = shallow(<Component />);

      expect(subject.find('input')).toHaveLength(1);
    });

    it('should render an input of type text', () => {
      let subject = shallow(<Component />);

      expect(subject.find('input').prop('type')).toBe('text');
    });

    it('should render an input with id "username"', () => {
      let subject = shallow(<Component />);

      expect(subject.find('input').prop('id')).toBe('username');
    });

    it('should render an input with placeholder set to "Username"', () => {
      let subject = shallow(<Component />);

      expect(subject.find('input').prop('placeholder')).toBe(
        'Username'
      );
    });

    it('should render a label', () => {
      let subject = shallow(<Component />);

      expect(subject.find('label')).toHaveLength(1);
    });

    it('should render a label with text "Username"', () => {
      let subject = shallow(<Component />);

      expect(subject.find('label').text()).toContain('Username');
    });

    it('should render a label pointing to the username field', () => {
      let subject = shallow(<Component />);

      expect(subject.find('label').prop('htmlFor')).toBe(
        'username'
      );
    });

    it('should assign onChange property to the input field and call it', () => {
      let callback = jest.fn();
      let subject = shallow(<Component onChange={callback} />);

      expect(callback).not.toHaveBeenCalled();
      subject.find('input').simulate('change');
      expect(callback).toHaveBeenCalled();
    });
  });
});
