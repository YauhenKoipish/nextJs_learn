import Link from "next/link";
import { MainLayout } from "../components/mainLayout";
import classes from "../styles/errror.module.scss";

export default function ErrorPage() {
  return (
    <MainLayout>
      <h1 className={classes.error}>Error 404 </h1>
      <p>
        Please
        <Link href="/">
          <a> go back to safety</a>
        </Link>
      </p>
    </MainLayout>
  );
}
