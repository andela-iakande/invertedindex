(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports=bookempty = []

},{}],2:[function(require,module,exports){
module.exports=books = [
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
module.exports=[
  {
    "title": "Alice hello in Wonderland",
    "text": "Alice falls into a rabbit hole and enters a world full of imagination."
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
/* Test Setup */
const myInvertedIndex = new InvertedIndexClass();
const book = require('./../books.json');
const emptyBook = require('./../bookempty.json');
const wrongBook = require('./../bookwrongformat.json');
const notBook = require('./../notBook.json');
const books = require('./../books3.json');

myInvertedIndex.files['book.json'] = book;
myInvertedIndex.files['books3.json'] = books;

/* Test Suites */
describe('Inverted Index Test', () => {
  describe('ReadFile', () => {
    it('should return false when checking an empty JSON array', () => {
      expect(myInvertedIndex.readFile(emptyBook))
        .toBeFalsy();
    });
    it('should return false when checking an wrongformatted JSON array', () => {
      expect(myInvertedIndex.readFile(wrongBook))
        .toBeFalsy();
    });
    it('should return false when book is not an array', () => {
      expect(myInvertedIndex.readFile(notBook))
        .toBeFalsy();
    });
    it('should return true if a valid JSON array', () => {
      expect(myInvertedIndex.readFile(book))
        .toBeTruthy();
    });

    it('should return correct keys for files when file is saved', () => {
      expect(Object.keys(myInvertedIndex.files))
        .toEqual(['book.json', 'books3.json']);
    });

    it('should ensure the file content is saved accurrately', () => {
      expect(myInvertedIndex.files['book.json'])
        .toEqual(book);
    });
  });

  describe('Show Index Table', () => {
    it('should ensure that index is created', () => {
      expect(myInvertedIndex.createIndex('book.json'))
        .toBeTruthy();
    });
    it('should ensure that index is created', () => {
      expect(myInvertedIndex.createIndex('books3.json'))
        .toBeTruthy();
    });

    it('should ensure that index of a file is returned accurrately', () => {
      expect(myInvertedIndex.getIndex('book.json').alice)
      .toEqual([0]);
    });
  });

  describe('Search Index', () => {
    it('should return correct index of the search term in all books', () => {
      expect(myInvertedIndex.searchIndex('alice'))
      .toEqual({ 'book.json': { alice: [0] }, 'books3.json': { alice: [0] } });
    });
    it('should return correct index of the search term in books3.json', () => {
      expect(myInvertedIndex.searchIndex('an alice', ['book.json', 'books3.json']))
      .toEqual({ 'book.json': { an: [1, 2] },
        'books3.json': { an: [1] } });
    });
    it('should return false when no result is found', () => {
      expect(myInvertedIndex.searchIndex('impossibility'))
        .toBeFalsy();
    });
    it('should return true when the result is found', () => {
      expect(myInvertedIndex.searchIndex('impossibility'))
        .toBeFalsy();
    });
  });
});

},{"./../bookempty.json":1,"./../books.json":2,"./../books3.json":3,"./../bookwrongformat.json":4,"./../notBook.json":5}]},{},[6])