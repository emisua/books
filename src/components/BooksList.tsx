import useBooks from '../hooks/useBooks'
import Book from './Book'

function BooksList() {
  const { books, moveBookToTheReadingList } = useBooks()

  return (
    <>
      <h3 className='text-2xl mb-2 font-bold text-black'>Lista de libros</h3>
      <ul className='gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center'>
        {books.map((book) => (
          <li
            key={book.ISBN}
            onClick={() => moveBookToTheReadingList(book)}
          >
            <Book book={book} />
          </li>
        ))}
      </ul>
    </>
  )
}
export default BooksList
