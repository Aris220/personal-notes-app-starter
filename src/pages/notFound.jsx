import styles from "../styles/style.module.css";
const NotFound = () => {
  return (
    <div>
      <section className={styles["notes-list-empty"]}>
        <p className={styles["notes-list-empty"]}> Notes Not Found </p>
      </section>
    </div>
  );
};
export default NotFound;
