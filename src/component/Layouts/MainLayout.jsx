//File css
import styles from "../../styles/style.module.css";

//File component
import Navbar from "../Fragments/Navbar";

const MainLayout = (props) => {
  const { children } = props;
  return (
    <>
      <div className={styles["app-container"]}>
        <Navbar />
        <main>{children}</main>
      </div>
    </>
  );
};
export default MainLayout;
