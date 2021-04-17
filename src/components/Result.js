import React from "react";

import styles from "../styles/components/Result.module.css";

const Result = ({currentPage , currentCharacters, openModal}) => {
    return (
        <div id={currentPage} className={styles.container} >
            <div className={styles.tableHead}>
                <div className={styles.emptySpace}></div>
                <div><p>Personagens</p></div>
                <div className={styles.responsive}><p>Séries</p></div>
                <div className={styles.responsive}><p>Eventos</p></div>
            </div>
            <div className={styles.tableItems}>

            {
                currentCharacters.map(character => (
                    <div key={character.id} className={styles.tableItem} onClick={() => openModal(character.id)}>
                        <div className={styles.thumbnailName}>
                            <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} />
                            <h3>{character.name}</h3>
                        </div>
                        <div className={styles.responsive}>
                        {

                            character.series.items.slice(0, 3).map((serie, index) => (
                                <p key={index}>{serie.name}</p>
                            ))
                        }
                        </div>
                        <div className={styles.responsive}>
                        {
                            character.events.items.slice(0, 3).map((event, index) => (
                                <p key={index}>{event.name}</p>
                            ))
                        }
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    );
};

export default Result;