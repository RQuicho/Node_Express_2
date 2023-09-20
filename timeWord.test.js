const timeWord = require('./timeWord');
const numToWord = require('./timeWord');
const request = require('supertest');

describe('#numToWord', () => {
  test('it is a function', () => {
    expect(typeof numToWord).toBe('function');
  });
  test('converts number to word', () => {
    expect(numToWord("01")).toEqual("one");
    expect(numToWord("05")).toEqual("five");
    expect(numToWord("10")).toEqual("ten");
    expect(numToWord("13")).toEqual("thirteen");
    expect(numToWord("20")).toEqual("twenty");
    expect(numToWord("22")).toEqual("twenty two");
    expect(numToWord("60")).toEqual("number must be from 0 to 59");
  });
});

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });
  // test("two-digit hour will return word string", () => {
  //   expect('00').toEqual('');
  //   expect('06').toEqual('six');
  //   expect('10').toEqual('ten');
  // });
  // test("two-digit minute will return word string", () => {
  //   expect('01').toEqual('oh one');
  //   expect('18').toEqual('eighteen');
  // });
  // test("am or pm", () => {
  //   expect('00').toEqual('am');
  //   expect('10').toEqual('am');
  //   expect('20').toEqual('pm');
  // });
});