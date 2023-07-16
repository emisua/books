import { useEffect } from 'react'
import { useAtom } from 'jotai'
import { BookListAtom, ReadingListAtom } from '../atoms/atoms'
import { BookType } from '../interfaces/interfaces'
import ListOfBooks from '../../public/mock/books.json'

const useBooks = () => {
  const [books, setBooks] = useAtom(BookListAtom)
  const [readingList, setReadingList] = useAtom(ReadingListAtom)
  const localBooks = localStorage.getItem('booksList')
  const localReadingList = localStorage.getItem('readingList')
  const booksArray = ListOfBooks.library.map((book) => book.book)

  useEffect(() => {
    setBooks(localBooks ? JSON.parse(localBooks) : booksArray)
    setReadingList(localReadingList ? JSON.parse(localReadingList) : [])
  }, [])

  useEffect(() => {
    localStorage.setItem('booksList', JSON.stringify(books))
  }, [books])

  useEffect(() => {
    localStorage.setItem('readingList', JSON.stringify(readingList))
  }, [readingList])

  function moveBookToTheReadingList(clickedBook: BookType) {
    const bookId = clickedBook.ISBN
    const removeBookFromBookList = books.filter((book) => book.ISBN !== bookId)
    const bookToMove = books.find((book) => book.ISBN === bookId)!

    // Quitar book de la lista de libros
    setBooks(removeBookFromBookList)

    // Añadir book a la lista de lectura
    setReadingList((prevReadingList: BookType[]) => [
      ...prevReadingList,
      bookToMove,
    ])
  }

  function moveBookToTheBookList(clickedBook: BookType) {
    const bookId = clickedBook.ISBN
    const removeBookFromReadingList = readingList.filter(
      (book) => book.ISBN !== bookId,
    )
    const bookToMove = readingList.find((book) => book.ISBN === bookId)!

    // Quitar book de la lista de libros
    setReadingList(removeBookFromReadingList)

    // Añadir book a la lista de lectura
    setBooks((prevBooks: BookType[]) => [...prevBooks, bookToMove])
  }

  return { moveBookToTheReadingList, moveBookToTheBookList, books, readingList }
}
export default useBooks
