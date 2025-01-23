import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

//File utils
import { showFormattedDate } from "../utils";
import { getAllNotes } from "../utils/local-data";

//File css
import styles from "../styles/style.module.css";

//File component
import NotFound from "./NotFound";
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

  return (
    <>
      {/* <div className={styles["app-container"]}>
        <Navbar />
        <main> */}
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
      {/* </main>
      </div> */}
    </>
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
