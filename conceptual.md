### Conceptual Exercise

Answer the following questions below:

- What is a JWT?

  - JSON Web Token. An open standard that makes it simple to share tokens across different services. Stores a "payload" of info and is "signed" using a secret key. Similar to Flask's session.

- What is the signature portion of the JWT? What does it do?

  - a version of header and payload that is signed with a secret key. A header ia metadata about a token. A payload is data to be stored in the token (usuall an object). The signature verifies the identity of the sender.

- If a JWT is intercepted, can the attacker see what's inside the payload?

  -

- How can you implement authentication with a JWT? Describe how it works at a high level.

- Compare and contrast unit, integration and end-to-end tests.

- What is a mock? What are some things you would mock?

- What is continuous integration?

- What is an environment variable and what are they used for?

- What is TDD? What are some benefits and drawbacks?

- What is the value of using JSONSchema for validation?

- What are some ways to decide which code to test?

- What does `RETURNING` do in SQL? When would you use it?

- What are some differences between Web Sockets and HTTP?

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
