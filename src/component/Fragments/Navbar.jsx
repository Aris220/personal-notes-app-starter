// import styles from "../../styles/style.module.css";

import { Link } from "react-router";
import styles from "../../styles/style.module.css";

const Navbar = () => {
  return (
    <>
      <header className={styles["header"]}>
        <h1>
          <Link to="/notes" className={styles["link-style"]}>
            Notes Aplication
          </Link>
        </h1>

        <nav className={styles["flex-nav"]}>
          {/* <ul className={styles["navigation"]}>
            <li> */}
          {/* <button className={styles["button-nav"]}>
              
              <Link to="/arsip">Archive</Link>
            </button> */}
          <Link to="/archive">Archive</Link>
          {/* </li>
          </ul> */}
        </nav>
      </header>
    </>
  );
};
export default Navbar;
