import React from "react";

import styles from "../styles/components/SeriesEvents.module.css";

const SeriesEvents = ({titleSection}) => {

    return(
        <section className={styles.series}>
            <h2>{titleSection}</h2>
            <div>
                <div className={styles.serieDetails}>
                    <img src="teste/serie.jpg" />
                    <p>Avengers: The Initiative (2007 - 2010)</p>
                </div>
                <div className={styles.serieDetails}>
                    <img src="teste/serie.jpg" />
                    <p>Avengers: The Initiative (2007 - 2010)</p>
                </div>
                <div className={styles.serieDetails}>
                    <img src="teste/serie.jpg" />
                    <p>Avengers: The Initiative (2007 - 2010)</p>
                </div>
            </div>
        </section>
    )
}

export default SeriesEvents;