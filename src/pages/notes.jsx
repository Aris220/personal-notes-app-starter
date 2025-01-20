import { useState, useEffect, Fragment, useRef } from "react";
import { getAllNotes } from "../utils/local-data";
import { showFormattedDate } from "../utils";

import styles from "../styles/style.module.css";
import NotFound from "./notFound";
import Navbar from "../component/Layouts/navbar";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current === false) {
      const data = getAllNotes();
      setNotes(data);
      loaded.current = true;
      console.log(data);
      console.log(loaded);
    }
  }, []);

  return (
    <Fragment>
      <div className={styles["app-container"]}>
        <Navbar />
        <main>
          <section className={styles["homepage"]}>
            {notes.length === 0 ? (
              <NotFound />
            ) : (
              <section className={styles["notes-list"]}>
                {notes.map((note) => (
                  <article className={styles["note-item"]} key={note.id}>
                    <h3 className={styles["note-item__title"]}>{note.title}</h3>
                    <p className={styles["note-item__createdAt"]}>
                      {showFormattedDate(note.createdAt)}
                    </p>
                    <p className={styles["note-item__body"]}>{note.body}</p>
                  </article>
                ))}
              </section>
            )}
          </section>
        </main>
      </div>
    </Fragment>
  );
};
export default Notes;
