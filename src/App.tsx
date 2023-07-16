import BooksList from './components/BooksList'
import ReadingList from './components/ReadingList'

export default function App() {
  return (
    <div className='flex flex-col bg-gray-800 text-slate-100 items-center justify-center gap-2'>
      <header>
        <h1 className='text-5xl font-bold'>Book List</h1>
      </header>
      <main className='container flex mt-8'>
        <aside className='reading bg-orange-400 p-6 w-2/12'>
          <h3 className='text-2xl mb-2 font-bold text-black'>Filtros</h3>
        </aside>
        <section className='books bg-slate-600 p-6 w-7/12'>
          <BooksList />
        </section>
        <aside className='reading bg-orange-400 p-6 w-3/12'>
          <ReadingList />
        </aside>
      </main>
    </div>
  )
}
