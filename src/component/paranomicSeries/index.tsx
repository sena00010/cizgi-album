import React from 'react';
import styles from './paronomicSeries.module.css'
export default function ImagesParonomicList() {
    const imagesList = [
        {
            images: 'loni-01.png',
            name: 'Loni',
            serialName: 'Kampanya Seri'
        },
        {
            images: 'meloni-01.png',
            name: 'Meloni',
            serialName: 'Standart Seri'
        }
        ,
        {
            images: 'oscar-black-01.png',
            name: 'Oscar Black',
            serialName: 'Standart Seri'
        },
        {
            images: 'meloni-01.png',
            name: 'Meloni',
            serialName: 'Line Seri'
        },
        {
            images: 'santana-02.png',
            name: 'Santana',
            serialName: 'Line Seri'
        }
    ];

    return (
        <div className={styles.main}>
            <h1 className={styles.newModelsTitle}>ÇİZGİ ALBÜM PANORAMİK SERİLER</h1>
            <div className={styles.container}>
                {
                    imagesList.map((item, index) => (
                        <div  className={styles.boxContainer} key={index}>
                            <div className={styles.ıtemsContainer}>
                                <img className={styles.ımageStyle} src={item.images} alt={item.name}/>
                                <p>Name: {item.name}</p>
                                <p>Serial Name: {item.serialName}</p>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    );
}
 ImagesParonomicList;
