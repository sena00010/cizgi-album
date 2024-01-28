import styles from './header.module.css'
import {faImages, faBasketShopping, faFile, faStar, faLocationDot} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
export default function Header(){
    return(
        <div className={styles.container}>
            <div>
                <h1> Çizgi Albüm </h1>
            </div>
            <div className={styles.rightHeaderItems}>
                <div className={styles.dropdown}>
                    <FontAwesomeIcon size={'2xs'} icon={faImages} />
                    <span>PANORAMİK ALBÜMLER</span>
                    <div className={styles.dropdowncontent}>
                        <a href={''}>sena</a>
                        <a href={''}>sena</a>
                        <a href={''}>sena</a>
                        <a href={''}>sena</a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <FontAwesomeIcon size={'2xs'} icon={faBasketShopping} />
                    <span>SİPARİŞLER</span>
                    <div className={styles.dropdowncontent}>
                        <a href={''}>sena</a>
                        <a href={''}>sena</a>
                        <a href={''}>sena</a>
                        <a href={''}>sena</a>
                    </div>
                </div>

                <div className={styles.dropdown}>
                    <FontAwesomeIcon icon={faFile} />
                    <span className={styles.ıtemsOfCenter}>KAPAK ŞABLONLARI VE KATALOGLAR</span>
                    <div className={styles.dropdowncontent}>
                        <a href={''}>sena</a>
                        <a href={''}>sena</a>
                        <a href={''}>sena</a>
                        <a href={''}>sena</a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <FontAwesomeIcon icon={faStar} />
                    <a href={''}>HAKKIMIZDA</a>
                </div>
                <div className={styles.dropdown}>
                    <FontAwesomeIcon icon={faLocationDot} />
                    <a href={''}>İLETİŞİM</a>
                </div>
            </div>
        </div>
    )
}
Header;