import { atom } from 'jotai'
import { BookType } from '../interfaces/interfaces'

export const BookListAtom = atom<BookType[]>([])
export const ReadingListAtom = atom<BookType[]>([])
