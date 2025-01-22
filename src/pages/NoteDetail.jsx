import { useEffect, useState } from "react";
import { useParams } from "react-router";

import styles from "../styles/style.module.css";
import { getNote } from "../utils/local-data";

import ButtonArchive from "../component/Elements/button/buttonArchive";
import ButtonDelete from "../component/Elements/button/buttonDelete";

const NoteDetail = () => {
  const { id } = useParams();
  const [dnote, setDnote] = useState([]);
  useEffect(() => {
    const note = getNote(id);
    setDnote(note);

    console.log(dnote);
  }, [id]);

  return (
    <section className={styles["detail-page"]}>
      <h3 className={styles["detail-page__title"]}>{dnote.title}</h3>
      <p className={styles["detail-page__createdAt"]}>{dnote.createdAt}</p>
      <div className={styles["detail-page__body"]}>{dnote.body}</div>
      <div className={styles["detail-page__action"]}>
        <ButtonArchive />

        <ButtonDelete />
      </div>
    </section>
  );
};
export default NoteDetail;
