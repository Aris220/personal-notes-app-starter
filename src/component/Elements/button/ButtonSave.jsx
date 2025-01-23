import styles from "../../../styles/style.module.css";

const ButtonSave = () => {
  return (
    <button className={styles["action"]} type="button" title="save">
      <img src="/icons/archive.svg" alt="Save Icon" />
    </button>
  );
};
export default ButtonSave;
