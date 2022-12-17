import Link from "next/link";
import { MainLayout } from "../components/MainLayout";
import css from "../styles/error.module.scss";

export default function ErrorPage() {
  return (
    <MainLayout>
      <h2 className={css.error}>Error 404</h2>
      <p>
        Please
        <Link href={"/"} style={{ color: "blue" }}>
          {" "}
          go back{" "}
        </Link>
        to safety
      </p>
    </MainLayout>
  );
}
