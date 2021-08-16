import React from 'react';

import styles from './Footer.module.scss';

// Icons
import fb_logo from './images/facebook-114px.png';
import li_logo from './images/li-in-black.png';
import gh_logo from './images/github-120px.png';
import ig_logo from './images/insta-120px.png';

const Footer = () => {

    return (
        <footer className={styles['-footer-base']}>
            <section className={styles['-section-icon']}>
                <div className={styles['-icons-box']}>
                    <a href={"https://github.com/PotLid"}><img src={gh_logo} alt={"github icon"} /></a>
                    <a href={"https://www.linkedin.com/in/junwoo-park-2b55a6178/"}><img src={li_logo} alt={"linkedin icon"} /></a>
                    <a href={"https://www.facebook.com/profile.php?id=100002916788386"}><img src={fb_logo} alt={"facebook icon"} /></a>
                    <a href={"https://www.instagram.com/potlid27/"}><img src={ig_logo} alt={"instagram icon"} /></a>
                </div>
            </section>
            <section className={styles['-section-cr']}>
                <p>Copyright © 2020-2021 Junwoo Park, All rights reserved.</p>
            </section>
        </footer>
    )
}

export default Footer;
