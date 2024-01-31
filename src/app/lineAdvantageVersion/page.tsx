import styles from './page.module.css'
import React from "react";
function LineAdvantegeVersionComp(){
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
    return(
        <>
            <div className={styles.container}>
                <div className={styles.contConnect}>
                    <h1>ÇİZGİ AVANTAJ SERİ</h1>
                </div>
                <div>
                    <a href={''}>Yeni Sipariş </a>
                    {' / '}
                    <a href={''}>Siparişlerim</a>
                </div>
            </div>

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
        </>
    )
}

export default LineAdvantegeVersionComp;