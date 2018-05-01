import * as component from './';

describe('Validations', () => {
  const { isFailure, isSuccess } = component;

  describe('isSuccess', () => {
    let subject;

    beforeEach(() => {
      subject = component.isSuccess;
    });

    it('should be a function', () => {
      expect(typeof subject).toBe('function');
    });
  });

  describe('isFailure', () => {
    let subject;

    beforeEach(() => {
      subject = component.isFailure;
    });

    it('should be a function', () => {
      expect(typeof subject).toBe('function');
    });
  });

  describe('success', () => {
    let subject;

    beforeEach(() => {
      subject = component.success;
    });

    it('should be a function', () => {
      expect(typeof subject).toBe('function');
    });

    it('should always succeed', () => {
      expect(isSuccess(subject())).toBe(true);
    });
  });

  describe('failure', () => {
    let subject;

    beforeEach(() => {
      subject = component.failure;
    });

    it('should be a function', () => {
      expect(typeof subject).toBe('function');
    });

    it('should always succeed', () => {
      expect(isFailure(subject())).toBe(true);
    });
  });

  describe('minLength', () => {
    let subject;

    beforeEach(() => {
      subject = component.minLength;
    });

    it('should be a function', () => {
      expect(typeof subject).toBe('function');
    });

    it('should fail if value provided is not of minimum length specified', () => {
      expect(isFailure(subject('field', 3, ''))).toBe(true);
      expect(isFailure(subject('field', 3, 'a'))).toBe(true);
      expect(isFailure(subject('field', 3, 'ab'))).toBe(true);
    });

    it('should succeed if value provided is of minimum length specified', () => {
      expect(isSuccess(subject('field', 3, 'abc'))).toBe(true);
      expect(isSuccess(subject('field', 3, 'abcd'))).toBe(true);
    });
  });

  describe('isValidPassword', () => {
    let subject;

    beforeEach(() => {
      subject = component.isValidPassword;
    });

    it('should be a function', () => {
      expect(typeof subject).toBe('function');
    });

    it('should fail if value provided is shorter than 6 characters', () => {
      expect(isFailure(subject('value'))).toBe(true);
    });

    it('should succeed if value provided is at least 6 characters long', () => {
      expect(isSuccess(subject('value1'))).toBe(true);
    });
  });

  describe('isValidUsername', () => {
    let subject;

    beforeEach(() => {
      subject = component.isValidUsername;
    });

    it('should be a function', () => {
      expect(typeof subject).toBe('function');
    });

    it('should fail if value provided is shorter than 6 characters', () => {
      expect(isFailure(subject('value'))).toBe(true);
    });

    it('should succeed if value provided is at least 6 characters long', () => {
      expect(isSuccess(subject('value1'))).toBe(true);
    });
  });

  describe('areValidLoginCredentials', () => {
    let subject;

    beforeEach(() => {
      subject = component.areValidLoginCredentials;
    });

    it('should be a function', () => {
      expect(typeof subject).toBe('function');
    });

    it('should fail when username is empty', () => {
      expect(
        isFailure(
          subject({ username: '', password: 'password' })
        )
      ).toBe(true);
    });

    it('should fail when password is empty', () => {
      expect(
        isFailure(
          subject({ username: 'username', password: '' })
        )
      ).toBe(true);
    });

    it('should fail when password is too short', () => {
      expect(
        isFailure(
          subject({ username: 'username', password: 'passw' })
        )
      ).toBe(true);
    });

    it('should fail when username is too short', () => {
      expect(
        isFailure(
          subject({ username: 'usern', password: 'password' })
        )
      ).toBe(true);
    });

    it('should succeed when both username and password are provided and are of minimum length', () => {
      expect(
        isSuccess(
          subject({ username: 'username', password: 'password' })
        )
      ).toBe(true);
    });

    it('should not return success with original data on failure', () => {
      expect(
        subject({
          username: 'usern',
          password: 'passw'
        }).getOrElse({})
      ).toEqual({});
    });

    it('should return success with original data on success', () => {
      expect(
        subject({
          username: 'username',
          password: 'password'
        }).getOrElse({})
      ).toEqual({ username: 'username', password: 'password' });
    });
  });
});
