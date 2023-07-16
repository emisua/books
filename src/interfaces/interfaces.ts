export interface BookType {
  title: string
  pages?: number
  genre?: string
  cover?: string
  synopsis?: string
  year?: number
  ISBN: string
  author?: AuthorType
}

export interface AuthorType {
  name?: string
  otherBooks?: string[]
}

export interface BookProps {
  book: BookType
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}
