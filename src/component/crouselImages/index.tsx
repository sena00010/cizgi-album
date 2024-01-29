import { useEffect, useState } from 'react';
import styles from './crousel.module.css';

const images = ['/Hayao-', '/images/image2.jpg', '/images/image3.jpg', '/images/image4.jpg', '/images/image5.jpg'];

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
            <div className={styles.imageContainer} style={{ backgroundImage }} />
        </div>
    );
};

export default ImageSlider;
