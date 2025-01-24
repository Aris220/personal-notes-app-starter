import styles from "../../styles/style.module.css";
const NotFound = (props) => {
  const { type } = props;
  return (
    <div>
      <section className={styles["notes-list-empty"]}>
        <p className={styles["notes-list-empty"]}>
          {type === "archive" ? " Archive Not Found" : " Notes Not Found"}{" "}
        </p>
      </section>
    </div>
  );
};
export default NotFound;
