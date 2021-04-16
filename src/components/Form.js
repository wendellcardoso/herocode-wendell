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
            <form onSubmit={event => event.preventDefault()}>
                <h2>Nome do personagem</h2>
                <div className={styles.search}>
                    <input 
                        type="text" 
                        placeholder="Search"
                        value={inputText}
                        onChange={handleInputChange}
                    />
                    <span type="submit">
                        <img src="assets/search.svg" />
                    </span>
                </div>

            </form>
        </div>
    );
};

export default Form;