import styles from "../../../styles/style.module.css";

const ButtonArchive = () => {
  return (
    <button className={styles["action"]} type="button" title="arhive">
      <img src="/icons/archive.svg" alt="Archive Icon" />
    </button>
  );
};
export default ButtonArchive;
