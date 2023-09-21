const {timeWord, numToWord, morningOrAfternoon} = require('./timeWord');
const request = require('supertest');

describe('#numToWord', () => {
  test('it is a function', () => {
    expect(typeof numToWord).toBe('function');
  });
  test('converts numbers 1-19 to words', () => {
    expect(numToWord("01")).toEqual("one");
    expect(numToWord("05")).toEqual("five");
    expect(numToWord("10")).toEqual("ten");
    expect(numToWord("13")).toEqual("thirteen");
  });
  test('converts numbers divisible by 10 to words', () => {
    expect(numToWord("20")).toEqual("twenty");
    expect(numToWord("40")).toEqual("forty");
    expect(numToWord("50")).toEqual("fifty");
  });
  test('converts numbers b/w 20 and 59 to words', () => {
    expect(numToWord("22")).toEqual("twenty two");
    expect(numToWord("34")).toEqual("thirty four");
    expect(numToWord("59")).toEqual("fifty nine");
  });
  test('error if number is out of range', () => {
    expect(numToWord("60")).toEqual("number must be from 0 to 59");
    expect(numToWord("-1")).toEqual("number must be from 0 to 59");
  });
});

describe('#morningOrAfternoon', () => {
  test('it is a function', () => {
    expect(typeof morningOrAfternoon).toBe('function');
  });
  test('correctly returns am', () => {
    expect(morningOrAfternoon('01:00')).toEqual('am');
    expect(morningOrAfternoon('06:10')).toEqual('am');
  });
  test('correctly returns pm', () => {
    expect(morningOrAfternoon('12:10')).toEqual('pm');
    expect(morningOrAfternoon('23:23')).toEqual('pm');
  });
  test('returns nothing if midnight or noon', () => {
    expect(morningOrAfternoon('00:00')).toEqual('');
    expect(morningOrAfternoon('12:00')).toEqual('');
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