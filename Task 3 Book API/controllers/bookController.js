import { books } from '../data/booksData.js';

export const getAllBooks = (req, res) => {
  res.json(books);
};

export const addBook = (req, res) => {
  const { title, author } = req.body;
  if (!title || !author)
    return res.status(400).json({ message: 'Title and Author are required!' });

  const newBook = {
    id: books.length + 1,
    title,
    author
  };
  books.push(newBook);
  res.status(201).json(newBook);
};

export const updateBook = (req, res) => {
  const { id } = req.params;
  const { title, author } = req.body;
  const book = books.find(b => b.id === parseInt(id));

  if (!book) return res.status(404).json({ message: 'Book not found!' });

  book.title = title || book.title;
  book.author = author || book.author;

  res.json(book);
};

export const deleteBook = (req, res) => {
  const { id } = req.params;
  const index = books.findIndex(b => b.id === parseInt(id));

  if (index === -1) return res.status(404).json({ message: 'Book not found!' });

  const deleted = books.splice(index, 1);
  res.json({ message: 'Book deleted successfully!', deleted });
};
