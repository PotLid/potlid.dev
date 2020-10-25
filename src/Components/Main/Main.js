import React, {useEffect, useState, useRef} from 'react';
import {useSelector, useDispatch} from "react-redux";

import styles from './Main.module.scss';

const Main = () => {

    const initialState = {
        progress: 0,
        chapters: 5,
        chaptersSub: 4, // chapters - 1
        windowHeight: window.innerHeight,
    }

    const [state, setState] = useState(initialState);

    const stickySection = useRef(null);
    const stickyContainer = useRef(null);

    // Add resizing also tracks the progress
    const updateWindowHeight = () => {
        const {chaptersSub} = state;
        if (!stickySection || !stickyContainer) return;
        const container = stickyContainer.current;
        setState(prevState => ({
            ...prevState,
            windowHeight: window.innerHeight,
            progress: container.getBoundingClientRect().top * -1 / (chaptersSub * window.innerHeight),
        }))
    }

    const updateScrollProgress = () => {
        const {windowHeight, chaptersSub} = state;
        if (!stickySection || !stickyContainer) return;
        const container = stickyContainer.current;
        // const progress = container.getBoundingClientRect().top * -1 / (4 * windowHeight);
        setState(prevState => ({
            ...prevState,
            progress: container.getBoundingClientRect().top * -1 / (chaptersSub * windowHeight),
        }))
    }

    useEffect(() => {
        window.addEventListener('resize', updateWindowHeight, false);
        window.addEventListener('scroll', updateScrollProgress, false);

        return () => {
            window.removeEventListener('resize', updateWindowHeight);
            window.removeEventListener('scroll', updateScrollProgress);
        }
    }, []);

    return (
        <div
            className={styles['-main-base']}
            style={{"height": `${state.windowHeight * 5}px`}}
            ref={stickyContainer}
        >
            <section
                className={styles['-sticky-box']}
                style={{"height": `${state.windowHeight}px`}}
                ref={stickySection}
            >
                <p>{state.windowHeight}</p>
                <p>{state.progress}</p>
            </section>
        </div>
    )
}

export default Main;
