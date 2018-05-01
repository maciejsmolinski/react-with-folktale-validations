import { Success, Failure } from 'folktale/validation';

export const isSuccess = data => Success.hasInstance(data);
export const isFailure = data => Failure.hasInstance(data);

export const success = () => Success();
export const failure = () => Failure();

export const minLength = (field, minLength, value) =>
  value.length >= minLength
    ? Success(value)
    : Failure([
        `Expected ${field} to have at least ${minLength} characters`
      ]);

export const isValidPassword = value =>
  success().concat(minLength('password', 6, value));

export const isValidUsername = value =>
  success().concat(minLength('username', 6, value));

export const areValidLoginCredentials = data =>
  success()
    .concat(isValidUsername(data.username))
    .concat(isValidPassword(data.password))
    .map(_ => data);
