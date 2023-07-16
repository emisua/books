import useBooks from '../hooks/useBooks'
import Book from './Book'

function ReadingList() {
  const { readingList, moveBookToTheBookList } = useBooks()
  return (
    <>
      <h3 className='text-2xl mb-2 font-bold text-black'>Reading List</h3>
      <ul className='gap-4 grid grid-cols-1 lg:grid-cols-2 justify-center'>
        {readingList.map((book) => (
          <li
            key={book.ISBN}
            onClick={() => moveBookToTheBookList(book)}
          >
            <Book book={book} />
          </li>
        ))}
      </ul>
    </>
  )
}
export default ReadingList
