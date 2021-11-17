import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../styles/Toolbar.module.css";
const Toolbar = () => {
  return (
    <div className={styles.main}>
      <div>
        <Link href="/">Home</Link>
      </div>
      <div onClick={() => (window.location.href = "https://twitter.com/")}>
        Twitter
      </div>
      <div onClick={() => (window.location.href = "https://github.com/")}>
        Github
      </div>
    </div>
  );
};

export default Toolbar;
