import prisma from "./prisma";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function createBook(book: any) {
  const authors = book.authors;
  const price = book.listPrice;
  const img = book.imageLinks;
  return {
    id: book.id,
    title: book.title,
    author: authors ? authors.join(",") : "",
    price: price ? price.amount : 0,
    publisher: book.publisher,
    published: book.publishedDate,
    image: img ? img.smallThumbnail : "/vercel.svg",
  };
}

export async function getBooksByKeyword(keyword: string) {
  const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${keyword}&langRestrict=ja&maxResults=20&printType=books`
  );
  const result = await res.json();
  const books = [];
  for (const b of result?.items ?? []) {
    books.push(createBook(b));
  }
  return books;
}

export async function getBookById(id: string) {
  const res = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
  const result = await res.json();
  return createBook(result);
}

export async function getReviewById(id: string) {
  return await prisma.reviews.findUnique({
    where: {
      id: id,
    },
  });
}

export async function getAllReviews() {
  return await prisma.reviews.findMany({
    orderBy: {
      read: "desc",
    },
  });
}
