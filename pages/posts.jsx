import Link from "next/link";
import { useState, useEffect } from "react";

import { MainLayout } from "../components/mainLayout";

export default function Posts({ posts: serverPosts }) {
  const [posts, setPosts] = useState(serverPosts);

  useEffect(() => {
    async function load() {
      const response = await fetch("http://localhost:4200/posts");
      const json = await response.json();
      setPosts(json);
    }

    if (!serverPosts) {
      load();
    }
  }, []);

  if (!posts) {
    return (
      <MainLayout title={"Posts page"}>
        <p>Loading...</p>
      </MainLayout>
    );
  }

  return (
    <MainLayout title={"Posts page"}>
      <h1>Posts page</h1>
      <ul>
        {posts.map(({ id, title }) => (
          <li key={id}>
            <Link href={`/post/${id}`}>
              <a>{title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </MainLayout>
  );
}

Posts.getInitialProps = async ({ req }) => {
  if (!req) {
    return { posts: null };
  }

  const response = await fetch("http://localhost:4200/posts");
  const posts = await response.json();

  return { posts };
};
