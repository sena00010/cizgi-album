'use client'
import styles from './header.module.css'
import {faImages, faBasketShopping, faFile, faStar, faLocationDot} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useRouter} from "next/navigation";
export default function Header(){
    const router=useRouter()

    const handleAboutUsClick = () => {
        router.push('../aboutUs');
    };
    return(
        <div>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h1> Çizgi Albüm </h1>
                </div>
                <div className={styles.rightHeaderItems}>
                    <div className={styles.dropdown}>
                        {/*<FontAwesomeIcon size={'2xs'} icon={faImages} />*/}
                        <span>PANORAMİK ALBÜMLER</span>
                        <div className={styles.dropdowncontent}>
                            <a href={''}>sena</a>
                            <a href={''}>sena</a>
                            <a href={''}>sena</a>
                            <a href={''}>sena</a>
                        </div>
                    </div>
                    <div className={styles.dropdown}>
                        {/*<div className={styles.ıcons}> <FontAwesomeIcon size={'2xs'} icon={faBasketShopping} /></div>*/}
                        <span>SİPARİŞLER</span>
                        <div className={styles.dropdowncontent}>
                            <a href={''}>sena</a>
                            <a href={''}>sena</a>
                            <a href={''}>sena</a>
                            <a href={''}>sena</a>
                        </div>
                    </div>

                    <div className={styles.dropdown}>
                        {/*<FontAwesomeIcon icon={faFile} />*/}
                        <span className={styles.ıtemsOfCenter}>KAPAK ŞABLONLARI VE KATALOGLAR</span>
                        <div className={styles.dropdowncontent}>

                            <a href={''}>sena</a>
                            <a href={''}>sena</a>
                            <a href={''}>sena</a>
                            <a href={''}>sena</a>
                        </div>
                    </div>
                    <div className={styles.dropdown}>
                        {/*<FontAwesomeIcon icon={faStar} />*/}
                        <a href={''} onClick={handleAboutUsClick}>HAKKIMIZDA</a>
                    </div>
                    <div className={styles.dropdown}>
                        {/*<FontAwesomeIcon icon={faLocationDot} />*/}
                        <a href={''}>İLETİŞİM</a>
                    </div>
                </div>
            </div>
            <div className={styles.animatedText}>
                <p className={styles.animatedTextContent}>Detaylı Sipariş için 05532698545662'den ulaşım sağlayabilirsiniz...</p>
            </div>
        </div>
    )
}
Header;