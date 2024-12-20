import React from 'react'
import styles from './Hero.module.css'

export const Hero = () => {
    return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Liam</h1>
            <p className={styles.description}>
                I'm a full stack developer who's a recent Computer Programming
                and Analysis graduate from St. Lawrence College. Reach out if 
                you'd like to learn more
            </p>
            <a href='mailto:liamalexmackenzie@gmail.com' 
            className={styles.contactBtn}>Contact Me
            </a>
        </div>
        <img src='assets/hero/heroImage.png' className={styles.heroImg}></img>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
    )
}
