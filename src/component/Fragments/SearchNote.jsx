import styles from "../../styles/style.module.css";

const SearchNote = (props) => {
  const { children } = props;
  return (
    <>
      <h2>{children}</h2>
      <section className={styles["search-bar"]}>
        <input type="text" placeholder="Search by title" />
      </section>
    </>
  );
};

export default SearchNote;
