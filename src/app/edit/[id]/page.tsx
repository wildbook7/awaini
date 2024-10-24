import BookDetails from "@/components/BookDetails";
import FormEdit from "@/components/FormEdit";
import { getBookById, getReviewById } from "@/lib/getter";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function EditPage({ params }: { params: any }) {
  const book = await getBookById(params.id);
  const review = await getReviewById(params.id);
  const read = (review?.read || new Date()).toLocaleDateString("sv-SE");
  // const read = (review?.read || new Date()).toLocaleDateString('ja-JP',
  //   { year: 'numeric', month: '2-digit', day: '2-digit' }
  // ).replaceAll('/', '-')

  return (
    <div id="form">
      <BookDetails book={book} />
      <hr />
      <FormEdit src={{ id: book.id, read, memo: review?.memo }} />
    </div>
  );
}
