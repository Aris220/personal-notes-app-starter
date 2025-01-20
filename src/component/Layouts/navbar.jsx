// import styles from "../../styles/style.module.css";

import { Link } from "react-router";
import styles from "../../styles/style.module.css";

const Navbar = () => {
  return (
    <>
      <header className={styles["header"]}>
        <h1>Notes Aplication</h1>
        <button className={styles["button-nav"]}>
          {/* <Link to="">a</Link> */}
          <a href="http://">arsip</a>
        </button>
      </header>
    </>
  );
};
export default Navbar;
