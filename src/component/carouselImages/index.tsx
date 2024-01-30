'use client'
import { useEffect, useState } from 'react';
import styles from './carousel.module.css';

const images = ['/HayaoMiyazaki.jpg', '/ko8rxxqv1yty.png', '/Leonardo_Diffusion_XL_so_many_attack_on_titandemon_slayersbung_2.jpg', '/Leonardo_Diffusion_XL_princess_who_has_a_long_hair_and_black_e_3.jpg'];

const ImageSlider = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const backgroundImage = `url(${images[currentImage]})`;

    return (
        <div className={styles.pageContainer}>
            <div className={styles.imageContainer} style={{backgroundImage}}/>
            <h1 className={styles.overlayText}>Çizgi Albüm</h1>
            <h2 className={styles.overlaySecondText}>Yine Yeniden Yeniliklere Geliyoruz...</h2>

        </div>
    );
};

export default ImageSlider;
