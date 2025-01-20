import styles from "../../../styles/style.module.css";

const ButtonDelete = () => {
  return (
    <button className={styles["action"]} type="button" title="arhive">
      <img src="/icons/delete.svg" alt="Delete Icon" />
    </button>
  );
};
export default ButtonDelete;
