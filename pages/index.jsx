import Link from "next/link";
import { MainLayout } from "../components/mainLayout";

export default function Index() {
  return (
    <>
      <MainLayout title={"Home page"}>
        <h1>Index</h1>
        <p>
          <Link href="/posts">
            <a>Posts</a>
          </Link>
        </p>
        <p>
          <Link href="/about">
            <a>About</a>
          </Link>
        </p>
      </MainLayout>
    </>
  );
}
