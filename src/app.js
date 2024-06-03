import { useState } from "react";
import styles from "./app.module.css";
import data from "./data.json";

export const App = () => {
    const [step] = useState(data);
    const [activeIndex, setActiveIndex] = useState(0);

    const isLastIndex = activeIndex === step.length - 1;
    const isFirstIndex = activeIndex === 0;

    const handleNext = () => {
        setActiveIndex((prevState) => prevState + 1);
    };
    const handlBack = () => {
        setActiveIndex((prevState) => prevState - 1);
    };
    const handleReset = () => {
        setActiveIndex(0);
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1>Инструкция по готовке пельменей</h1>
                <div className={styles.steps}>
                    <div className={styles["steps-content"]}>
                        {step[activeIndex].content}
                    </div>
                    <ul className={styles["steps-list"]}>
                        {step.map((step, index) => (
                            <li
                                className={
                                    styles["steps-item"] +
                                    " " +
                                    (index <= activeIndex && styles["done"]) +
                                    " " +
                                    (index === activeIndex && styles["active"])
                                }
                            >
                                <button
                                    onClick={() => setActiveIndex(index)}
                                    className={styles["steps-item-button"]}
                                >
                                    {index + 1}
                                </button>
                                {step.title}
                            </li>
                        ))}
                    </ul>
                    <div className={styles["buttons-container"]}>
                        <button
                            disabled={isFirstIndex}
                            onClick={handlBack}
                            className={styles.button}
                        >
                            Назад
                        </button>
                        <button
                            onClick={isLastIndex ? handleReset : handleNext}
                            className={styles.button}
                        >
                            {isLastIndex ? "Начать сначало" : "Далее"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
