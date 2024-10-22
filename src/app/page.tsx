import LinkedBookDetails from "@/components/LinkedBookDetails";
import { getAllReviews } from "@/lib/getter";

export default async function Home() {
  const reviews = await getAllReviews();
  console.log(reviews);

  return (
    <>
      {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        reviews.map((b: any, i: number) => (
          <LinkedBookDetails book={b} index={i + 1} key={b.id} />
        ))
      }
    </>
  );
}
