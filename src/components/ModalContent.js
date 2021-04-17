import React from "react";

import SeriesEvents from "./SeriesEvents";

import styles from "../styles/components/ModalContent.module.css";

const ModalContent = ({closeModal, charSelected, series, events}) => {
    return (
        <div>
            <div className={styles.closeModal} >
                <img src="assets/close.svg" alt="Close Modal" onClick={closeModal} />
            </div>
            <section className={styles.charDetails}>
                <img src={`${charSelected[0].thumbnail.path}.${charSelected[0].thumbnail.extension}`} alt="Imagem do personagem" />
                <div>
                    <h2>{charSelected[0].name}</h2>
                    <p>{charSelected[0].description}</p>
                </div>
            </section>
            <SeriesEvents titleSection="Séries" seriesEventos={series} />
            <SeriesEvents titleSection="Eventos" seriesEventos={events} />
        </div>
    )
}

export default ModalContent;