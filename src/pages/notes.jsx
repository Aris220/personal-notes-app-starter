import { useState, useEffect, Fragment, useRef } from "react";
import { getAllNotes } from "../utils/local-data";
import { showFormattedDate } from "../utils";
import { Link, useParams } from "react-router";
import PropTypes from "prop-types";

import styles from "../styles/style.module.css";
import NotFound from "./notFound";
import Navbar from "../component/Fragments/Navbar";

const Notes = (props) => {
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

  const { id } = useParams;

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
                    <h3 className={styles["note-item__title"]} id={note.id}>
                      <Link to={`/notes/${note.id}`}>{note.title}</Link>
                    </h3>
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
