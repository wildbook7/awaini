import prisma from "./prisma";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function createBook(book: any) {
  const authors = book.authors;
  const img = book.imageLinks;
  return {
    id: book.id,
    title: book.title,
    author: authors ? authors.join(",") : "",
    price: book.retailPrice?.amount ?? 0,
    publisher: book.publisher,
    published: book.publishedDate,
    image: img?.smallThumbnail,
  };
}

export async function getBooksByKeyword(keyword: string) {
  const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${keyword}&langRestrict=ja&maxResults=20&printType=books&key=${process.env.GOOGLE_BOOKS_API_KEY}`
  );
  const result = await res.json();
  // console.log(result?.items);
  const books = [];
  for (const b of result?.items ?? []) {
    books.push(
      createBook({
        id: b.id,
        retailPrice: b.saleInfo.retailPrice,
        ...b.volumeInfo,
      })
    );
  }
  return books;
}

export async function getBookById(id: string) {
  const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes/${id}?key=${process.env.GOOGLE_BOOKS_API_KEY}`
  );
  const result = await res.json();
  return createBook({
    id: result.id,
    retailPrice: result.saleInfo.retailPrice,
    ...result.volumeInfo,
  });
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
