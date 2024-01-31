'use client'
import styles from './abouteUs.module.css';
import {useState} from "react";

export default function AboutUs() {
    const externalVideoUrl = 'https://www.cizgialbum.com/images/home-page/video/video-1.webm';
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div>
                    <h1>Hakkımızda</h1>
                    <p>“ Çizgi Albüm Albümde Yeni Çizginiz ”</p>
                </div>
                <div>
                    <a href={''}>Üye Girişi</a>
                    {' / '}
                    <a href={''}>Yeni sipariş</a>
                    {' / '}
                    <a href={''}>Güvenli Çıkış</a>
                </div>
            </div>
            <div >
                <video width="1500px" height="660"
                controls={false} autoPlay muted loop>
                    <source src={externalVideoUrl} type="video/webm"/>
                </video>
            </div>
            <div className={styles.explanation}>
                <h2>ÇİZGİ ALBÜM</h2>
                <div className={styles.redLine}></div>
                <p>“ ÇİZGİ ALBÜM ” 2002 yılında İstanbul'da albüm sektöründe faliyet göstermeye başladı. “ Panoramik albüm ” alanında, ürün ve hizmet kalitemizi sürekli geliştirerek, müşteri talep ve beklentilerini en üst seviyede karşılamak, güçlü bir iletişim ile müşterilerimizle aramızda çözüm odaklı bir bağ yaratmayı amaçlamaktayız.

                    “ 2 Katlı ve 1600 m2 ” kapalı alanda Profesyonel kadromuz ve ekipmanlarımız ile müşterilerimizin çözüm ortağı olarak, birlikte başarılı işler yapmaya devam ediyoruz. “ Teknoloji ve yenilikleri ” uygulayarak “ kaliteli ve hızlı ” hizmet vermeyi, firmamızın bütün çalışanları temel görev olarak benimseyip uygulamaktadır. Siz değerli müşterilerimizle beraber, “ ALBÜMDE YENİ ÇİZGİNİZ ” sloganıyla kendimizi daha fazla geliştirip yeni işlere imza atmayı temenni ederiz.
                </p>
                <h3 >  Saygılarımızla, Çizgi Albüm Ailesi...</h3>
                <div className={styles.blackLine}></div>
            </div>
        </div>
    );
}
