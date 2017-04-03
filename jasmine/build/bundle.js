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

},{}],3:[function(require,module,exports){
module.exports=bookempty = []

},{}],4:[function(require,module,exports){
module.exports=notBook = {
  "title": "hello",
  "text": "hello"
}
},{}],5:[function(require,module,exports){
'use strict';

var _book = require('./../book.json');

var _book2 = _interopRequireDefault(_book);

var _emptyBook = require('./../emptyBook.json');

var _emptyBook2 = _interopRequireDefault(_emptyBook);

var _wrongFormat = require('./../wrongFormat.json');

var _wrongFormat2 = _interopRequireDefault(_wrongFormat);

var _invalidBook = require('./../invalidBook.json');

var _invalidBook2 = _interopRequireDefault(_invalidBook);

var _books = require('./../books.json');

var _books2 = _interopRequireDefault(_books);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var myInvertedIndex = new invertedIndex();

/* Test Suites */
describe('Inverted Index Test', function () {
  describe('ReadFile', function () {
    beforeEach(function () {
      myInvertedIndex.files['book.json'] = _book2.default;
      myInvertedIndex.files['books.json'] = _books2.default;
    });
    it('should return false when checking an empty JSON array', function () {
      expect(myInvertedIndex.readFile(_emptyBook2.default)).toBeFalsy();
    });
    it('should return false when checking a wrongformatted JSON array', function () {
      expect(myInvertedIndex.readFile(_wrongFormat2.default)).toBeFalsy();
    });
    it('should return false when book is not an array', function () {
      expect(myInvertedIndex.readFile(_invalidBook2.default)).toBeFalsy();
    });
    it('should return true if a valid JSON array', function () {
      expect(myInvertedIndex.readFile(_book2.default)).toBeTruthy();
    });

    it('should return correct keys for files when file is saved', function () {
      expect(Object.keys(myInvertedIndex.files)).toEqual(['book.json', 'books.json']);
    });

    it('should ensure the file content is saved accurrately', function () {
      expect(myInvertedIndex.files['book.json']).toEqual(_book2.default);
    });
  });
  describe('Validate File', function () {
    it('should return false when file does not contain "title" & "text" format', function () {
      expect(myInvertedIndex.validateFile(_wrongFormat2.default)).toBeFalsy();
    });
    it('verifies that the JSON file is valid', function () {
      expect(myInvertedIndex.validateFile(_book2.default).length).toEqual(2);
    });
  });
  describe('Create Index Table', function () {
    beforeEach(function () {
      myInvertedIndex.files['books.json'] = _books2.default;
      myInvertedIndex.files['book.json'] = _book2.default;
    });
    it('should ensure that index is created', function () {
      expect(myInvertedIndex.createIndex('book.json')).toBeTruthy();
    });
    it('should ensure that index is created', function () {
      expect(myInvertedIndex.createIndex('books.json')).toBeTruthy();
    });
  });
  describe('Get Index', function () {
    it('should ensure that index of a file is returned accurrately', function () {
      expect(myInvertedIndex.getIndex('book.json').alice).toEqual([0]);
    });
  });
  describe('Tokenize', function () {
    beforeEach(function () {
      myInvertedIndex.files['books.json'] = _books2.default;
    });
    it('should return correct terms in form of string in an array', function () {
      expect(myInvertedIndex.tokenize(_books2.default[0].text)).toEqual(['alice', 'falls', 'into', 'a', 'rabbit', 'hole', 'and', 'enters', 'a', 'world', 'full', 'of', 'imagination']);
    });
    it('should return correct terms in terms of lowercase', function () {
      expect(myInvertedIndex.tokenize(_books2.default[0].text)[0]).toEqual('alice');
    });
    it('should return array of terms without space or invalid characters', function () {
      expect(myInvertedIndex.tokenize('alice.,&-falls')).toEqual(['alice', 'falls']);
    });
  });
  describe('Search Index', function () {
    beforeEach(function () {
      myInvertedIndex.files['books.json'] = _books2.default;
    });
    it('should return correct index of the search term in all books', function () {
      expect(myInvertedIndex.searchIndex('alice')).toEqual({ 'book.json': { alice: [0] }, 'books.json': { alice: [0] } });
    });
    it('should return correct index of the search term in books3.json', function () {
      expect(myInvertedIndex.searchIndex('an alice', ['book.json', 'books.json'])).toEqual({ 'book.json': { an: [1], alice: [0] },
        'books.json': { an: [1, 2], alice: [0] } });
    });
    it('should return false when no result is found', function () {
      expect(myInvertedIndex.searchIndex('impossibility')).toBeFalsy();
    });
    it('should return true when the result is found', function () {
      expect(myInvertedIndex.searchIndex('impossibility')).toBeFalsy();
    });
  });
});
},{"./../book.json":1,"./../books.json":2,"./../emptyBook.json":3,"./../invalidBook.json":4,"./../wrongFormat.json":6}],6:[function(require,module,exports){
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

},{}]},{},[5])