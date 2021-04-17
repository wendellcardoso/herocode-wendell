import React from "react";

import SeriesEvents from "./SeriesEvents";

import styles from "../styles/components/ModalContent.module.css";

const ModalContent = ({closeModal}) => {
    return (
        <div>
            <div className={styles.closeModal} onClick={closeModal}>
                <img src="assets/close.svg" alt="Close Modal" />
            </div>
            <section className={styles.charDetails}>
                <img src="teste/char.png"  />
                <h2>Rick Jones</h2>
                <p>"Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction! "</p>
            </section>
            <SeriesEvents titleSection="Séries" />
            <SeriesEvents titleSection="Eventos" />
        </div>
    )
}

export default ModalContent;