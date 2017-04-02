(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports=books = [
  {
    "title": "Alice in Wonderland",
    "text": "Alice falls into a rabbit hole and enters a world full of imagination."
  },

  {
    "title": "The Lord of the Rings: The Fellowship of the Ring.",
    "text": "An unusual alliance of man, elf, dwarf, wizard and hobbit seek to destroy a powerful ring."
  }
]

},{}],2:[function(require,module,exports){
module.exports=bookempty = []

},{}],3:[function(require,module,exports){
module.exports=books3 = [
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

},{}],4:[function(require,module,exports){
module.exports=bookwrongformat = [
  {
    "what": "Alice in Wonderland",
    "next": "Alice falls into a rabbit hole and enters a world full of imagination."
  },

  {
    "are": "The Lord of the Rings: The Fellowship of the Ring.",
    "how": "An unusual alliance of man, elf, dwarf, wizard and hobbit seek to destroy a powerful ring."
  }
]

},{}],5:[function(require,module,exports){
module.exports=notBook = {
  "title": "hello",
  "text": "hello"
}
},{}],6:[function(require,module,exports){
'use strict';

var _book = require('./../book.json');

var _book2 = _interopRequireDefault(_book);

var _bookempty = require('./../bookempty.json');

var _bookempty2 = _interopRequireDefault(_bookempty);

var _bookwrongformat = require('./../bookwrongformat.json');

var _bookwrongformat2 = _interopRequireDefault(_bookwrongformat);

var _notBook = require('./../notBook.json');

var _notBook2 = _interopRequireDefault(_notBook);

var _books = require('./../books3.json');

var _books2 = _interopRequireDefault(_books);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var myInvertedIndex = new InvertedIndexClass(); /* global InvertedIndexClass */

myInvertedIndex.files['book.json'] = _book2.default;
myInvertedIndex.files['books3.json'] = _books2.default;

/* Test Suites */
describe('Inverted Index Test', function () {
  describe('ReadFile', function () {
    it('should return false when checking an empty JSON array', function () {
      expect(myInvertedIndex.readFile(_bookempty2.default)).toBeFalsy();
    });
    it('should return false when checking an wrongformatted JSON array', function () {
      expect(myInvertedIndex.readFile(_bookwrongformat2.default)).toBeFalsy();
    });
    it('should return false when book is not an array', function () {
      expect(myInvertedIndex.readFile(_notBook2.default)).toBeFalsy();
    });
    it('should return true if a valid JSON array', function () {
      expect(myInvertedIndex.readFile(_book2.default)).toBeTruthy();
    });

    it('should return correct keys for files when file is saved', function () {
      expect(Object.keys(myInvertedIndex.files)).toEqual(['book.json', 'books3.json']);
    });

    it('should ensure the file content is saved accurrately', function () {
      expect(myInvertedIndex.files['book.json']).toEqual(_book2.default);
    });
  });
  describe('Validate File', function () {
    it('should return false when file does not contain "title" & "text" format', function () {
      expect(myInvertedIndex.validateFile(_bookwrongformat2.default)).toBeFalsy();
    });
  });
  it('verifies that the JSON file is valid', function () {
    expect(myInvertedIndex.validateFile(_book2.default).length).toEqual(2);
  });
  describe('Create Index Table', function () {
    it('should ensure that index is created', function () {
      expect(myInvertedIndex.createIndex('book.json')).toBeTruthy();
    });
    it('should ensure that index is created', function () {
      expect(myInvertedIndex.createIndex('books3.json')).toBeTruthy();
    });
  });
  describe('Get Index', function () {
    it('should ensure that index of a file is returned accurrately', function () {
      expect(myInvertedIndex.getIndex('book.json').alice).toEqual([0]);
    });
  });
  describe('Tokenize', function () {
    it('should return correct terms in form of string in an array', function () {
      expect(myInvertedIndex.tokenize(_books2.default[0].text)).toEqual(['alice', 'falls', 'into', 'a', 'rabbit', 'hole', 'and', 'enters', 'a', 'world', 'full', 'of', 'imagination']);
    });
  });

  describe('Search Index', function () {
    it('should return correct index of the search term in all books', function () {
      expect(myInvertedIndex.searchIndex('alice')).toEqual({ 'book.json': { alice: [0] }, 'books3.json': { alice: [0] } });
    });
    it('should return correct index of the search term in books3.json', function () {
      expect(myInvertedIndex.searchIndex('an alice', ['book.json', 'books3.json'])).toEqual({ 'book.json': { an: [1], alice: [0] },
        'books3.json': { an: [1, 2], alice: [0] } });
    });
    it('should return false when no result is found', function () {
      expect(myInvertedIndex.searchIndex('impossibility')).toBeFalsy();
    });
    it('should return true when the result is found', function () {
      expect(myInvertedIndex.searchIndex('impossibility')).toBeFalsy();
    });
  });
});
},{"./../book.json":1,"./../bookempty.json":2,"./../books3.json":3,"./../bookwrongformat.json":4,"./../notBook.json":5}]},{},[6])