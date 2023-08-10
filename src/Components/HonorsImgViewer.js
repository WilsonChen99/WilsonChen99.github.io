import React, { useState } from 'react';
import LightBox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import styles from './HonorsImgViewer.module.css';

export default function HonorsImgViewer ({logo, title, images}) {
    const [ isViewerOn, setIsViewerOn ] = useState(false);


    return (
        <>
            <div className={styles.imgViewerContainer}>
                <img src={logo} alt='honors logo'/>
                <p onClick={ () => setIsViewerOn(true)}>{title}</p>
            </div>
            <LightBox
                open={isViewerOn}
                close={()=>setIsViewerOn(false)}
                slides={images}
            />
        </>
    )
}