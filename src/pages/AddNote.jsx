//File css
import styles from "../styles/style.module.css";

//File component
import ButtonSave from "../component/Elements/button/ButtonSave";

const AddNote = () => {
  return (
    <>
      <section>
        <div className={styles["add-new-page__input"]}>
          <input
            className={styles["add-new-page__input__title"]}
            placeholder="Secret Note"
          />
          <div
            className={styles["add-new-page__input__body"]}
            contentEditable="true"
            data-placeholder="TOP SECRET NOTE ....."
          ></div>
        </div>
        <div className={styles["add-new-page__action"]}>
          <ButtonSave />
        </div>
      </section>
    </>
  );
};
export default AddNote;
