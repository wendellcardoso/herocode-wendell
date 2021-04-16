import React, { useState } from "react";
import styles from "../styles/components/Form.module.css";

const Form = ({manageResultsArray}) => {

    const [inputText, setInputText] = useState("");

    const handleInputChange = (event) => {

        const {value} = event.target;

        setInputText(value);

        manageResultsArray(value);

    }

    return (
        <div className={styles.container}>
            <form>
                <h2>Nome do personagem</h2>
                <div className={styles.search}>
                    <input 
                        type="text" 
                        placeholder="Search"
                        value={inputText}
                        onChange={handleInputChange}
                    />
                    <button type="submit">
                        <img src="assets/search.svg" />
                    </button>
                </div>

            </form>
        </div>
    );
};

export default Form;