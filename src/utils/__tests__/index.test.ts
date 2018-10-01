import {omit, contain} from '../omit';

describe('test utils', () => {
  it('omit', () => {
    expect(omit({a: 1, b: 2}, ['a'])).toStrictEqual({b: 2});
  });
  it('contain', () => {
    expect(contain({a: 1}, ['a'])).toStrictEqual({a: 1});
  });
});
