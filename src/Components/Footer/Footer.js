import React from 'react';

import styles from './Footer.module.scss';

// Icons
import li_logo from './images/linkedin-icon-1.svg';
import gh_logo from './images/github_logo.svg';
import gl_logo from './images/gitlab_logo.svg';

const Footer = () => {

    return (
        <footer className={styles['-footer-base']}>
            <section className={styles['-section-icon']}>
                <div className={styles['-icons-box']}>
                    <a href={"https://github.com/PotLid"}><img src={gh_logo} alt={"github icon"} /></a>
                    <a href={"https://gitlab.com/PotLid"}><img src={gl_logo} alt={"github icon"} /></a>
                    <a href={"https://www.linkedin.com/in/junwoo-park-2b55a6178/"}><img src={li_logo} alt={"linkedin icon"} /></a>
                </div>
            </section>
            <section className={styles['-section-cr']}>
                <p>Copyright © 2020-2021 Junwoo Park, All rights reserved.</p>
            </section>
        </footer>
    )
}

export default Footer;
