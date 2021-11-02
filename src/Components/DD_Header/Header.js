import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {NavLink, Link, withRouter} from 'react-router-dom';
import {action_header_active, action_header_inactive} from "../../Redux/actions/AppActions";

// import styles from './Header.scss'
import './Header.scss';

import headerLogo from './images/potlid_header_logo.svg';
import menuLogo from './images/potlid_menu_logo.svg';

import HeaderButton from "./HeaderButton";

class Header extends Component {
    static propTypes = {
        className: PropTypes.string,
        classNameMenu: PropTypes.string,
        classNameNoTouch: PropTypes.string,
        headerHide: PropTypes.bool,
    }
    static defaultProps = {
        className: "dd-header",
        classNameMenu: "dd-header-menu",
        classNameNoTouch: "dd-header-no-touch",
        headerHide: false,
    }
    constructor(props) {
        super(props);
        this.state = {
            isHeaderActive: false,
            isHeaderHide: false,
            isHeaderAway: false,
            isHeaderBackgroundInit: false,
            isMenuLoading: false,
            // prevent the side effect;
            // under the mobile device (ios Safari)
            // rebound scroll causes negative value
            lastScrollTop: (window.pageYOffset || document.documentElement.scrollTop) < 0 ? 0 : window.pageYOffset || document.documentElement.scrollTop,
            // touch detection related properties
            hasHoverClass: false,
            container: document?.body,
            lastTouchTime: 0,
        }
        // this.menuActiveHandler = this.menuActiveHandler.bind(this);

        this.menuHideOnscroll = this.menuHideOnscroll.bind(this);
        this.menuAwayOnscroll = this.menuAwayOnscroll.bind(this);
        this.headerTransitionHandler = this.headerTransitionHandler.bind(this);

        this.headerEnableHover = this.headerEnableHover.bind(this);
        this.headerDisableHover = this.headerDisableHover.bind(this);
        this.updateLastTouchTime = this.updateLastTouchTime.bind(this);

        this.scrollToTop = this.scrollToTop.bind(this);

        this.menuLoadingHandler = this.menuLoadingHandler.bind(this);

        this.menuActiveScrollTop = this.menuActiveScrollTop.bind(this);
    }

    componentDidMount() {
        // scroll related
        this.attachScrollEvents();
        // touch detect related
        this.attachTouchDetectListeners();
        // init touch detect
        this.headerEnableHover();
        // // reset state
        // this.headerTransitionInit();
    }

    componentWillUnmount() {
        // scroll related
        this.removeScrollEvents();
        // touch detect related
        this.removeTouchDetectListeners();
    }
    // ScrollToTop + MenuActiveHandler
    menuActiveScrollTop() {
        this.scrollToTop();
        this.menuActiveHandler();
    }

    // Manage Menu Active state
    menuActiveHandler = () => {
        const {isHeaderActive} = this.state;

        this.setState((prevState) => {
            return {
                isHeaderActive: !prevState.isHeaderActive,
                isMenuLoading: true,
            };
        });
    };
    // to the top
    // not using this -> scroll top React Router.
    scrollToTop() {
        const c = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        if (c > 0) {
            const smoothness = 8;
            let val = c - c / smoothness;
            if (val < smoothness) val = 0;
            window.requestAnimationFrame(this.scrollToTop);
            // window.scrollTo(0, c - c /8);
            window.scrollTo(0, val);
        }
    }

    // touch detection
    headerEnableHover() {
        const {hasHoverClass, lastTouchTime, container} = this.state;
        // discard emulated mouseMove events from touch events
        if (new Date() - lastTouchTime < 500) return;
        if (hasHoverClass) return;
        if (!container) return;
        container.classList.add(this.props.classNameNoTouch);
        this.setState({
            hasHoverClass: true,
        })
    }

    headerDisableHover() {
        const {hasHoverClass, container} = this.state;
        if (!hasHoverClass) return;
        if (!container) return;
        container.classList.remove(this.props.classNameNoTouch);
        this.setState({
            hasHoverClass: false,
        })
    }

    updateLastTouchTime() {
        this.setState({
            lastTouchTime: new Date(),
        })
    }

    attachTouchDetectListeners() {
        document.addEventListener('touchstart', this.updateLastTouchTime, true);
        document.addEventListener('touchstart', this.headerDisableHover, true);
        document.addEventListener('mousemove', this.headerEnableHover, true);
    }

    removeTouchDetectListeners() {
        document.removeEventListener('touchstart', this.updateLastTouchTime);
        document.removeEventListener('touchstart', this.headerDisableHover);
        document.removeEventListener('mousemove', this.headerEnableHover);
    }

    // menu loading handler
    menuLoadingHandler(e) {
        // if (e.propertyName.toLowerCase() === 'background-color')
        if (e.propertyName.toLowerCase() === 'height') {
            this.setState({
                isMenuLoading: false,
            })
        }
    }
    // Header transition handler
    headerTransitionHandler(e) {
        const {isHeaderActive, isHeaderHide, isMenuLoading} = this.state;
        if (isHeaderActive || isMenuLoading) return;
        if (e.propertyName.toLowerCase() === "opacity") {
            if (isHeaderHide) {
                this.setState({
                    isHeaderBackgroundInit: false,
                })
            } else
                this.setState({
                    isHeaderBackgroundInit: true,
                })
        }
    }
    // function management
    // Menu Hide on scroll Controller
    menuHideOnscroll() {
        const {lastScrollTop, isHeaderHide, isHeaderActive} = this.state;
        // if menu is active, just skip
        if (isHeaderActive) return;
        const currentTop = (window.pageYOffset || document.documentElement.scrollTop) < 0 ? 0 : window.pageYOffset || document.documentElement.scrollTop;
        let headerHide = false;
        if (currentTop > lastScrollTop) {
            if (isHeaderHide) {
                this.setState({
                    lastScrollTop: currentTop,
                })
                return;
            }
            // this.setState({
            //     isHeaderHide: true,
            // })
            headerHide = true;
        } else if (currentTop < lastScrollTop) {
            // this.setState({
            //     isHeaderHide: false,
            // })
            headerHide = false;
        }
        this.setState({
            isHeaderHide: headerHide,
            lastScrollTop: currentTop,
        })
    }

    // Menu Away on Scroll Controller
    menuAwayOnscroll() {
        const currentTop = window.pageYOffset || document.documentElement.scrollTop;
        if (currentTop > 30) {
            this.setState({
                isHeaderAway: true,
            })
        } else if (currentTop <= 30) {
            this.setState({
                isHeaderAway: false,
            })
        }
    }

    // Manage Event Handlers
    attachScrollEvents() {
        document.addEventListener('scroll', this.menuHideOnscroll);
        document.addEventListener('scroll', this.menuAwayOnscroll);
    }

    removeScrollEvents() {
        document.removeEventListener('scroll', this.menuHideOnscroll);
        document.removeEventListener('scroll', this.menuAwayOnscroll);
    }

    render() {
        const {isHeaderActive, isHeaderHide, isHeaderAway, isHeaderBackgroundInit, isMenuLoading} = this.state;
        const {headerHide, location} = this.props;
        // freeze body element
        isHeaderActive ? document.body.classList.add('--dd-header-freezeScroll') : document.body.classList.remove('--dd-header-freezeScroll');
        // header settings
        // Don't forget the white space
        let headerClass = "dd-header";
        if (isHeaderActive) headerClass += " --dd-header-active";
        if (!headerHide) headerClass += " --dd-hide-default";
        if (headerHide && isHeaderHide) headerClass += " --dd-hide-onscroll";
        if (isHeaderAway) headerClass += " --dd-away-onscroll";
        if (isHeaderBackgroundInit) headerClass += " --dd-header-bg-init";
        // header menu settings
        // let menuClass = "dd-header-menu --dd-header-loading";
        let menuClass = "dd-header-menu";
        if (isHeaderActive) menuClass += " --dd-header-active";
        if (isMenuLoading) menuClass += " --dd-header-loading"
        return (
            <React.Fragment>
                <header className={headerClass} onTransitionEndCapture={this.headerTransitionHandler}>
                    <span className={"dd-header-bg"}/>
                    <nav className={"dd-header-wrap"}>
                        <div className={"dd-logo-wrap"}>
                            <Link to={"/"}>
                                <img src={headerLogo} alt={"dd-header-logo"}/>
                            </Link>
                        </div>
                        <HeaderButton onClick={this.menuActiveHandler}/>
                    </nav>
                    <div className={menuClass} onTransitionEnd={this.menuLoadingHandler}>
                        <span className={"dd-header-menu-padding"}/>
                        <ul className={"dd-header-menu-list"}>
                            <li className={"dd-menu-logo-wrap"}>
                                <Link to={"/"} onClick={this.menuActiveHandler}>
                                    <img src={menuLogo} alt={"dd-header-logo in menu opened"}/>
                                </Link>
                            </li>
                            <li className={"dd-header-menu-item"}>
                                <span className={"dd-header-menu-item-wrap"}>
                                <NavLink to={"/about"} activeClassName={"dd-item-active"}
                                         onClick={this.menuActiveHandler}>
                                    About
                                </NavLink>
                                </span>
                            </li>
                            <li className={"dd-header-menu-item"}>
                                <span className={"dd-header-menu-item-wrap"}>
                                <NavLink to={"/work"} activeClassName={"dd-item-active"}
                                         onClick={this.menuActiveHandler}>
                                    Works
                                </NavLink>
                                </span>
                                <ul className={"dd-header-sub-menu-list"}>
                                    <li className={"dd-header-sub-menu-item"}>
                                        <NavLink to={"/work/web"} activeClassName={"dd-sub-item-active"}
                                                 onClick={this.menuActiveHandler}>
                                            Web / App
                                        </NavLink>
                                    </li>
                                    {/*<li className={"dd-header-sub-menu-item"}>*/}
                                    {/*    <NavLink to={"/work/design"} activeClassName={"dd-sub-item-active"}*/}
                                    {/*             onClick={this.menuActiveHandler}>*/}
                                    {/*        Design*/}
                                    {/*    </NavLink>*/}
                                    {/*</li>*/}
                                    {/*<li className={"dd-header-sub-menu-item"}>*/}
                                    {/*    <NavLink to={"/work/video"} activeClassName={"dd-sub-item-active"}*/}
                                    {/*             onClick={this.menuActiveHandler}>*/}
                                    {/*        Video Promotion*/}
                                    {/*    </NavLink>*/}
                                    {/*</li>*/}
                                    {/*<li className={"dd-header-sub-menu-item"}>*/}
                                    {/*    <NavLink to={"/work/marketing"} activeClassName={"dd-sub-item-active"}*/}
                                    {/*             onClick={this.menuActiveHandler}>*/}
                                    {/*        Marketing*/}
                                    {/*    </NavLink>*/}
                                    {/*</li>*/}
                                </ul>
                            </li>
                            <li className={"dd-header-menu-item"}>
                                <span className={"dd-header-menu-item-wrap"}>
                                <NavLink to={"/contact"} activeClassName={"dd-item-active"}
                                         onClick={this.menuActiveHandler}>
                                    Contact
                                </NavLink>
                                </span>
                            </li>
                        </ul>
                    </div>
                </header>
            </React.Fragment>
        );
    }
}

export default withRouter(Header);
