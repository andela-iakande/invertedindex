[![Build Status](https://travis-ci.org/andela-iakande/invertedindex.svg?branch=staging)](https://travis-ci.org/andela-iakande/invertedindex) [![Coverage Status](https://coveralls.io/repos/github/andela-iakande/invertedindex/badge.svg?branch=staging)](https://coveralls.io/github/andela-iakande/invertedindex?branch=staging) [![Code Climate](https://codeclimate.com/github/andela-iakande/invertedindex/badges/gpa.svg)](https://codeclimate.com/github/andela-iakande/invertedindex)
# invertedindex
An inverted index object that takes a JSON array of text objects and creates an index from the array. The index allows a user to search for text blocks in the array that contain a specified collection of words.

#### Features
- Accepts Upload of JSON file in below format.
```
[
  {
    "title": "Alice in Wonderland",
    "text": "Alice falls into a rabbit hole and enters a world full of imagination."
  },

  {
    "title": "The Lord of the Rings: The Fellowship of the Ring.",
    "text": "An unusual alliance of man, elf, dwarf, wizard and hobbit seek to destroy a powerful ring."
  },
  {
    "title": "The Lord of the Rings: The Fellowship of the Ring.",
    "text": "An unusual alliance of man, elf, dwarf, wizard and hobbit seek to destroy a powerful ring."
  }
]
```
- Creates Index of all objects with 'title' and 'text' keys in uploaded file.
- Allows Searching through the created index.

#### How to use
The Application is available:
- On any local machine after the following steps:
    ```
    git clone https://github.com/andela-iakande/invertedindex
    ```

    * Navigate to the 'invertedindex' directory via your terminal

    * Install all the dependencies (you must have installed [Nodejs](nodejs.org)):

    ```
    npm install
    ```

    - Run Tests for the application with:

    ```
    npm test
    ```

  - Start the Application with:
  ```
    npm start
    ```

  - Access the application via https://imisioluwa-invertedindex.herokuapp.com


#### The application was built using the following Technologies and Services:
- Gulp
- Karma
- Jasmine
- Travis CI
- Coveralls
- Hound CI
- Materialise

#### Limitation of the application
The Application can not accept multiple files for search at a time.
