import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {action_header_active, action_header_inactive} from "../../Redux/actions/AppActions";

import styles from './Header.module.scss';

const Header = () => {
    const appObj = useSelector(state => state.app);
    const {isHeaderActive} = appObj;

    const dispatch = useDispatch();

    return (
        <>
            <header className={isHeaderActive ? styles['-header-base-active'] : styles['-header-base']}>
                <div className={styles['-header-inactive-box']}>
                    <input
                        type={"button"}
                        onClick={isHeaderActive ?
                            () => dispatch(action_header_inactive()) :
                            () => dispatch(action_header_active())
                        }
                    />
                </div>
                <nav className={styles['-header-nav']}>

                </nav>
            </header>
            <section className={styles['-header-padding']}/>
        </>
    )
}

export default Header;
