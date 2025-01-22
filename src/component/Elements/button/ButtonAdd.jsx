import styles from "../../../styles/style.module.css";

const ButtonAdd = () => {
  return (
    <button className={styles["action"]} type="button" title="add">
      <img src="/icons/add.svg" alt="Add Icon" />
    </button>
  );
};
export default ButtonAdd;
