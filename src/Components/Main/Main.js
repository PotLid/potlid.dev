import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";

import styles from './Main.module.scss';

const Main = () => {

    const initialState = {
        progress: 0,
    }

    const [state, setState] = useState(initialState);

    useEffect(() => {

        return () => {

        }
    }, []);

    return (
        <div className={styles['-main-base']}>
            <section>

            </section>
        </div>
    )
}

export default Main;
