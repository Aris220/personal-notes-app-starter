// import styles from "../../styles/style.module.css";

import { Link } from "react-router";
import styles from "../../styles/style.module.css";

const Navbar = () => {
  return (
    <>
      <header className={styles["header"]}>
        <h1>Notes Aplication</h1>
        <nav className={styles["flex-nav"]}>
          {/* <ul className={styles["navigation"]}>
            <li> */}
          {/* <button className={styles["button-nav"]}>
              
              <Link to="/arsip">Archive</Link>
            </button> */}
          <Link to="/arsip">Archive</Link>
          {/* </li>
          </ul> */}
        </nav>
      </header>
    </>
  );
};
export default Navbar;
