/* Test Setup */
const myInvertedIndex = new InvertedIndexClass();
const book = require('./../books.json');
const emptyBook = require('./../bookempty.json');

myInvertedIndex.files['book.json'] = book;


/* Test Suites */
describe('Inverted Index Test', () => {
  describe('ReadFile', () => {
    it('should return false when checking a bad JSON array', () => {
      expect(myInvertedIndex.readFile(emptyBook))
        .toBeFalsy();
    });

    it('should return true when if a good JSON array', () => {
      expect(myInvertedIndex.readFile(book))
        .toBeTruthy();
    });

    it('should return correct keys for files when file is saved', () => {
      expect(Object.keys(myInvertedIndex.files))
        .toEqual(['book.json']);
    });

    it('should ensure the file content is saved accurrately', () => {
      expect(myInvertedIndex.files['book.json'])
        .toEqual(book);
    });
  });

  describe('Populate Index Table', () => {
    it('should ensure that index is created', () => {
      expect(myInvertedIndex.createIndex('book.json'))
        .toBeTruthy();
    });

    it('should ensure that index of a file is returned accurrately', () => {
      expect(myInvertedIndex.getIndex('book.json').alice)
      .toEqual([0]);
    });
  });

  describe('Search Index', () => {
    it('should return correct index of the search term', () => {
      expect(myInvertedIndex.searchIndex('alice'))
        .toEqual({ 'book.json': { alice: [0] } });
    });
    it('should return false when no result is found', () => {
      expect(myInvertedIndex.searchIndex('impossibility'))
        .toBeFalsy();
    });
  });
});
