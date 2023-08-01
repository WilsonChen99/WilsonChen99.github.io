import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Button.module.css'

export function ButtonFilled({text, link}){
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        navigate(link);
    }

    return (
        <>
            <button className={styles.buttonFilled} onClick={handleClick}>{text}</button>
        </>
    )
}

export function ButtonHollow({text, link}){
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        navigate(link);
    }

    return (
        <>
            <button className={styles.buttonHollow} onClick={handleClick}>{text}</button>
        </>
    )
}

export function ButtonSquare( {img, alt, link}){

    return (
        <>
            <button className={styles.squareButton}>
                <a href={link} target="_blank" rel="noreferrer">
                    <img src={img} alt={alt}/>
                </a>
            </button>
        </>
    );
}

export function ButtonSquareLight ({img, alt, link}){
    return (
        <>
            <button className={styles.squareButtonLight}>
                <a href={link} target="_blank" rel="noreferrer">
                <img src={img} alt={alt} />
                </a>
            </button>
        </>
    )
}

export function SelectionBarButton ({title, id, active, setActive}) {

    const handleClick = () => {
        setActive(id);
    }

    return (
        <>
            <button className={active===id?styles.SelectionBarButtonActive:styles.SelectionBarButton} onClick={handleClick}>
                <p>{title}</p>
            </button>
        </>
    )
}