import React, { useState, useCallback } from 'react';
import ImageViewer from 'react-simple-image-viewer';
import styles from './HonorsImgViewer.module.css';


export default function HonorsImgViewer ( {title, logo, links} ) {
    const [ currImg, setCurrImg ] = useState (0)
    const [isViewerOn, setIsViewerOn ] = useState(false);
    const images = links;

    const openImageViewer = useCallback((i) => {
        setCurrImg(i);
        setIsViewerOn(true);
    });

    const closeImageViewer = () => {
        setCurrImg(0);
        setIsViewerOn(false);
    }

    return (
        <>
            <div className={styles.imgViewerContainer}>
                <img src={logo} alt='honors logo'/>
                <p onClick={ () => openImageViewer(0)}>{title}</p>
            </div>

            {
                isViewerOn && (
                    <ImageViewer
                        src = { images }
                        currentIndex = { currImg }
                        disableScroll = { false }
                        closeOnClickOutside = { true }
                        onClose = {closeImageViewer }
                    />
            )}
        </>
    )
}
