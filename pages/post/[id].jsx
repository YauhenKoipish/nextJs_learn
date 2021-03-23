import Link from "next/link";
import { useState, useEffect } from "react";
import { MainLayout } from "../../components/mainLayout";
import { useRouter } from "next/router";

export default function Post({ post: serverPost }) {
  const [post, setPost] = useState(serverPost);
  const { query } = useRouter();

  useEffect(() => {
    async function load() {
      const response = await fetch(`http://localhost:4200/posts/${query.id}`);
      const data = await response.json();
      setPost(data);
    }

    if (!serverPost) {
      load();
    }
  }, []);

  if (!post) {
    return (
      <MainLayout title={`Post  ${query.id}`}>
        <p>Loading...</p>
      </MainLayout>
    );
  }

  return (
    <MainLayout title={`Post  ${query.id}`}>
      <h1>{post.title}</h1>
      <hr />
      <p>{post.body}</p>
      <Link href="/posts">
        <a>Back to all posts</a>
      </Link>
    </MainLayout>
  );
}

Post.getInitialProps = async ({ query, req }) => {
  if (!req) {
    return { post: null };
  }

  const response = await fetch(`http://localhost:4200/posts/${query.id}`);
  const post = await response.json();
  return { post };
};

// export async function getServerSideProps({ query }) {
//   const response = await fetch(`http://localhost:4200/posts/${query.id}`);
//   const post = await response.json();
//   return { props: { post } };
// }
