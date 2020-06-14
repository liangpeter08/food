import React, { useState } from 'react';
import css from './header.css';
// import menu from '../../assets/menu.svg';
// import HeaderMenu from '../../components/headerMenu/headerMenu';
import logo from '../../assets/logo2.png';
import { Link } from 'react-router-dom';
import { useViewportScroll, useTransform, motion, useSpring } from "framer-motion";

import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../../graphql/mutations';
import { CreateBlogInput } from '../../API';

// Simple query
async function getBlog() {
    const input: CreateBlogInput = {
        id: '1',
        name: 'First Blog',
    };
    const allTodos = await API.graphql(graphqlOperation(mutations.createBlog,
        {
            input,
        }));
    console.log(allTodos);
}

export default function Header() {
    getBlog();
    const { scrollY } = useViewportScroll();
    const yRange = useTransform(scrollY, [0, 300], [30, 0]);
    const [padding, setPadding] = useState(30);
    const yBorder = useTransform(scrollY, [0, 100], [5, 0]);
    const [border, setBorder] = useState(5);
    const yRangeDamp = useSpring(yRange, { damping: 100 });
    yRange.onChange(() => {
        setBorder(yBorder.get());
    });

    yRangeDamp.onChange(() => {
        setPadding(yRangeDamp.get());
    });

    const transition = {
        type: "tween",
        duration: 1,
    }
    return (
        <>
            <motion.div className={css.header} initial={{ scale: 0.1 }} animate={{ scale: 1 }} transition={transition} style={{ padding: `${padding + 5}px 0`, borderBottom: padding < 10 ? '1px solid black' : '' }}>
                <div className={css.headerLeft}>
                    <Link to="/" className={css.navTitle}>Home</Link>
                    <Link to="/cart" className={css.navTitle}>Recipes</Link>

                </div>
                <Link to="/" className={css.nameTitle} style={{ padding: `${padding}px 5px`, border: `${border}px solid black` }}>
                    <div>
                        <img className={[css.headerSvg, css.logoSvg].join(' ')} src={logo} />
                        Meal Cravings
                        <div className={css.slogan}>Cooking Made Easy</div>
                    </div>
                </Link>
                <div className={css.navLinks}>
                    <Link to="/cart" className={css.navTitle}>Cart</Link>
                    <Link to="/signin" className={css.navTitle}>Sign in</Link>
                </div>
            </motion.div>
            <div className={css.placeholder}></div>
        </>);
}
