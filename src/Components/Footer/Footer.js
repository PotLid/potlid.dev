import React from 'react';

import styles from './Footer.module.scss';

// Icons
import {gh_logo, gl_logo, li_logo} from './Image';

const Footer = () => {

    return (
        <footer className={styles['-footer-base']}>
            <section className={styles['-section-icon']}>
                <div className={styles['-icons-box']}>
                    <a href={"https://github.com/PotLid"}>{gh_logo}</a>
                    <a href={"https://gitlab.com/PotLid"}>{gl_logo}</a>
                    <a href={"https://www.linkedin.com/in/junwoo-park-2b55a6178/"}>{li_logo}</a>
                </div>
            </section>
            <section className={styles['-section-cr']}>
                <p>Copyright © 2020-2021 Junwoo Park, All rights reserved.</p>
            </section>
        </footer>
    )
}

export default Footer;
