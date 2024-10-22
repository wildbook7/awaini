import Link from "next/link";
import BookDetails from "./BookDetails";

export default function LinkedBookDetails({
  index,
  book,
}: {
  index: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  book: any;
}) {
  return (
    <Link href={`/edit/${book.id}`}>
      <div className="hover:bg-green-50">
        <BookDetails index={index} book={book} />
      </div>
    </Link>
  );
}
