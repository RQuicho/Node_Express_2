### Conceptual Exercise

Answer the following questions below:

- What is a JWT?

  - JSON Web Token. An open standard that makes it simple to share tokens across different services. Stores a "payload" of info and is "signed" using a secret key. Similar to Flask's session. It containes a header, payload and signature.

- What is the signature portion of the JWT? What does it do?

  - It is a hashed combination of the encoded header and encoded payload, with a secret key. A header is metadata about a token. A payload is data to be stored in the token (usuall an object). The signature verifies the identity of the sender.

- If a JWT is intercepted, can the attacker see what's inside the payload?

  - Yes, but they cannot change any existing information or use it without the correct signature.

- How can you implement authentication with a JWT? Describe how it works at a high level.

  - You can use middleware to authenticte a JWT. The function will find and verify the JWT and add the payload onto the request itself. If there was no token verified, an error will happen.

    const authenticate JWT = (req, res, next) => {
    try {
    const tokenFromBody = req.body.\_token;
    const payload = jwt.verify(tokenFromBody, SECRET_KEY);
    req.user = payload;
    return next();
    } catch(err) {
    return next();
    }
    }

- Compare and contrast unit, integration and end-to-end tests.

  - unit tests: test a single function at a time
  - integration tests: tests if different pieces of an application are working together. Tend to be more involved than unit tests
  - end to end tests: tests application workflow from start to finish. Simulates user's experience and makes sure all compnenets are working correctly. More comprehensive than unit tests or integration tests.

- What is a mock? What are some things you would mock?

  - primarily used in unit testing
  - replace other objects by mocks that simulate their behavior
  - instead of waiting for API responses, dealing with rate limits, or random functions, you can use a mock value to mimic what that behavior would be by hard-coding it

- What is continuous integration?

  - the practice of merging in small code changes frequently, rather than merging it all at once toward the end

- What is an environment variable and what are they used for?

  - used to store secret information and config data
  - can store tokens and prevents sensitive data from being hard-coded
  - setting can be changed based on the environemnt (development, testing, production)

- What is TDD? What are some benefits and drawbacks?

  - Test Driven Deveopment
  - an approach or practice when developing an application
  - write test first (they will fail)
  - only wirte code needed to pass the tests
  - keep running tests to make sure they pass
  - benefits: forces code to be more modular, document code better, easier to refactor, catches errors sooner
  - drawbacks: have to maintain tests, tests can be hard to write, slow development at beginning, entire org has to be writing code this way, challenging to learn, difficult to apply to existing legacy code

- What is the value of using JSONSchema for validation?

  - you can compare data to a JSON schema to make sure it follows the correct format
  - catches an error without changing any existing data
  - can edit schema if desired
  - data is more complete and less prone to errors

- What are some ways to decide which code to test?

- What does `RETURNING` do in SQL? When would you use it?

- What are some differences between Web Sockets and HTTP?

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
