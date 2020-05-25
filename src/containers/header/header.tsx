import React, { useState } from 'react';
import css from './header.css';
// import menu from '../../assets/menu.svg';
// import HeaderMenu from '../../components/headerMenu/headerMenu';
import logo from '../../assets/logo2.png';
import { Link } from 'react-router-dom';
import { useViewportScroll, useTransform, motion } from "framer-motion";

export default function Header() {
    const { scrollY } = useViewportScroll();
    const yRange = useTransform(scrollY, [0, 300], [30, 0]);
    const [padding, setPadding] = useState(30);


    scrollY.onChange(() => setPadding(yRange.get()));

    const transition = {
        type: "tween",
        duration: 1,
    }
    return (
        <>
            <motion.div className={css.header} initial={{ scale: 0.1 }} animate={{ scale: 1 }} transition={transition} style={{ padding: `${padding + 5}px 0`, borderBottom: padding < 10 ? '1px solid black' : '' }}>
                <div className={css.headerLeft}>
                    <Link to="/cart" className={css.navTitle}>Home</Link>
                    <Link to="/contact" className={css.navTitle}>Recipes</Link>

                </div>
                <Link to="/" className={css.nameTitle} style={{ padding: `${padding}px 0` }}>
                    <div>
                        <img className={[css.headerSvg, css.logoSvg].join(' ')} src={logo} />
                        Meal Cravings
                        <div className={css.slogan}>Cooking Made Easy</div>
                    </div>
                </Link>
                <div className={css.navLinks}>
                    <Link to="/cart" className={css.navTitle}>About</Link>
                    <Link to="/cart" className={css.navTitle}>Sign in</Link>
                </div>
            </motion.div>
            <div className={css.placeholder}></div>
        </>);
}
