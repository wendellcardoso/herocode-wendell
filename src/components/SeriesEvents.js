import React from "react";

import styles from "../styles/components/SeriesEvents.module.css";

const SeriesEvents = ({titleSection, seriesEventos}) => {

    if(seriesEventos.length !== 0){
        return(
            <section className={styles.series}>
                <h2>{titleSection}</h2>
                <div>
                {
                    seriesEventos.map(serieEvento => (
                        <div key={serieEvento.id} className={styles.serieDetails}>
                            <img src={`${serieEvento.thumbnail.path}.${serieEvento.thumbnail.extension}`} alt=""/>
                            <p>Avengers: The Initiative (2007 - 2010)</p>
                        </div>
                    ))
                }
                </div>
            </section>
        )
    }else{
        return null;
    }
}

export default SeriesEvents;