import React from "react";
import BookCard from "@/components/BookCard";

interface Props {
  title: string;
  books: Book[];
  containerClassName?: string;
}

const BookList = ({ title, books, containerClassName }: Props) => {
  if (books.length < 2) return null;

  return (
    <section className={containerClassName}>
      <h2 className="font-bebas-neue text-4xl text-light-100">{title}</h2>

      <ul className="book-list">
        {books.map((book) => (
          <BookCard
            key={book.id}
            id={book.id}
            title={book.title}
            genre={book.genre}
            color={book.color}
            cover={book.cover}
            isLoanedBook={book.isLoanedBook} author={""} rating={0} total_copies={0} available_copies={0} description={""} videoUrl={""} summary={""} createdAt={null} totalCopies={0} availableCopies={0} coverColor={""} coverUrl={""}          />
        ))}
      </ul>
    </section>
  );
};

export default BookList;
