import { Link } from "react-router";
import styles from "../../../styles/style.module.css";
const ButtonSave = ({ onClick }) => {
  return (
    <button
      className={styles["action"]}
      type="button"
      title="save"
      onClick={onClick}
    >
      <img src="/icons/archive.svg" alt="Save Icon" />
    </button>
  );
};

export default ButtonSave;
