import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Blog",
  },
};

export default async function SecondBlog() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Intential delay");
    }, 2000);
  });
  return <h1>My Blog</h1>;
}
