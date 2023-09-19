const timeWord = require('./timeWord');
const request = require('supertest');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });
  test("two-digit hour will return word string", () => {
    expect('00').toEqual('');
    expect('06').toEqual('six');
    expect('10').toEqual('ten');
  });
  test("two-digit minute will return word string", () => {
    expect('01').toEqual('oh one');
    expect('18').toEqual('eighteen');
  });
  test("am or pm", () => {
    expect('00').toEqual('am');
    expect('10').toEqual('am');
    epsect('20').toEqual('pm');
  });
});