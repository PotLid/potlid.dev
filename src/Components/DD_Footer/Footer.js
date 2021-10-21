import React from 'react';
import styles from './Footer.module.scss';
// react - router
import {withRouter, Link} from 'react-router-dom';

const Footer = () => (
    <footer className={styles["dd-footer"]}>
        <section className={styles["dd-footer-wrap"]}>
            <div className={styles["dd-footer-wrap-flex"]}>
                <div className={styles["dd-footer-info"]}>
                    <span className={styles['dd-footer-dd']}>Double D</span>
                    {/*<dl>*/}
                    {/*    <dt></dt>*/}
                    {/*    <dd></dd>*/}
                    {/*</dl>*/}
                    <ul className={styles['dd-footer-details']}>
                        <li className={styles['dd-footer-details-row']}>상호 : 더블디 | 대표 : 이동근 | 주소 : 대구광역시 북구 대현로 86 2층 | 이메일 : dongproject@naver.com</li>
                        <li className={styles['dd-footer-details-row']}>사업자 등록번호 : 123-45-67890 | Tel : 053 939 4991 | Fax : 053 939 4991</li>
                    </ul>
                    <span className={styles['dd-footer-copyright']}>Copyrightⓒdouble D All rights reserved.</span>
                </div>
                <ul className={styles['dd-footer-menu-list']}>
                    <li className={styles['dd-footer-menu-item']}><Link to={"/about"}>ABOUT</Link></li>
                    <li className={styles['dd-footer-menu-item']}><Link to={"/work"}>WORKS</Link></li>
                    <li className={styles['dd-footer-menu-item']}><Link to={"/contact"}>CONTACT</Link></li>
                </ul>
            </div>
        </section>
    </footer>
)


export default withRouter(Footer);
