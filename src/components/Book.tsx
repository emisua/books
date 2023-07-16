import { BookProps } from '../interfaces/interfaces'

function Book({ book }: BookProps) {
  const { title, cover } = book
  return (
    <div className='book cursor-pointer'>
      <img
        src={cover}
        alt={title}
        className='rounded-lg aspect-[9/14] object-cover mb-2 w-full'
      />
      <h4 className='mb-2'>{title}</h4>
    </div>
  )
}
export default Book
