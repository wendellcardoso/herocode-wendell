import React from "react";
import styles from "../styles/components/Form.module.css";

const Form = () => {
    return (
        <div className={styles.container}>
            <form>
                <h2>Nome do personagem</h2>
                <div className={styles.search}>
                    <input type="text" placeholder="Search" />
                    <button type="submit">
                        <img src="assets/search.svg" />
                    </button>
                </div>

            </form>
        </div>
    );
};

export default Form;