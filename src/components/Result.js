import React from "react";

import styles from "../styles/components/Result.module.css";

const Result = ({charactersRender}) => {
    return (
        <div className={styles.container} >
            <div className={styles.tableHead}>
                <div className={styles.emptySpace}></div>
                <div><p>Personagens</p></div>
                <div className={styles.responsive}><p>Séries</p></div>
                <div className={styles.responsive}><p>Eventos</p></div>
            </div>
            <div className={styles.tableItems}>

            {
                charactersRender.map(character => (
                    <div key={character.id} className={styles.tableItem}>
                        <div className={styles.thumbnailName}>
                            <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} />
                            <h3>{character.name}</h3>
                        </div>
                        <div className={styles.responsive}>
                        {
                            character.series.items.slice(0, 3).map(serie => (
                                <p>{serie.name}</p>
                            ))
                        }
                        </div>
                        <div className={styles.responsive}>
                        {
                            character.events.items.slice(0, 3).map(event => (
                                <p>{event.name}</p>
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