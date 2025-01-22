import { useState, useEffect, Fragment, useRef } from "react";
import { getAllNotes } from "../utils/local-data";
import { showFormattedDate } from "../utils";
import { Link, useParams } from "react-router";
import PropTypes from "prop-types";

import styles from "../styles/style.module.css";
import NotFound from "./NotFound";
import Navbar from "../component/Fragments/Navbar";
import CardNote from "../component/Fragments/CardNote";
import SearchNote from "../component/Fragments/SearchNote";
import ButtonAdd from "../component/Elements/button/ButtonAdd";

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

  const { id } = useParams;

  return (
    <Fragment>
      <div className={styles["app-container"]}>
        <Navbar />
        <main>
          <section className={styles["homepage"]}>
            <SearchNote>Active Note</SearchNote>
            {notes.length === 0 ? (
              <NotFound />
            ) : (
              <section className={styles["notes-list"]}>
                {notes.map((note) => (
                  <CardNote
                    key={note.id}
                    id={note.id}
                    title={note.title}
                    createdAt={showFormattedDate(note.createdAt)}
                    body={note.body}
                  />
                ))}
              </section>
            )}
            <div>
              <section className={styles["homepage__action"]}>
                <ButtonAdd />
              </section>
            </div>
          </section>
        </main>
      </div>
    </Fragment>
  );
};

//Validation
CardNote.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
export default Notes;
