"use server";

import { redirect } from "next/navigation";

import prisma from "./prisma";
import { getBookById } from "./getter";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function addReview(data: any) {
  const book = await getBookById(data.get("id"));
  const input = {
    title: book.title,
    author: book.author,
    price: Number(book.price),
    publisher: book.publisher,
    published: book.published,
    image: book.image,
    read: new Date(data.get("read")),
    memo: data.get("memo"),
  };

  await prisma.reviews.upsert({
    update: input,
    create: Object.assign({}, input, { id: data.get("id") }),
    where: {
      id: data.get("id"),
    },
  });
  redirect("/");
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function removeReview(data: any) {
  await prisma.reviews.delete({
    where: {
      id: data.get("id"),
      // id: data
    },
  });
  redirect("/");
}
