import * as React from 'react';
import css from './footer.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo2.png';
import CustomButton from '../../components/customButton/customButton';


export default function Footer() {
    return (<div className={css.body}>
        <div className={css.sections}>
            <div className={css.companyDescription}>
                <div className={css.companyHeader}>
                    <img className={css.footerImg} src={logo} />
                    Quetzal Labs
                </div>
                <p className={css.websiteDescription}>
                    Meal Cravings is a Website to help you plan
                    and manage your shopping cart more easily.
                    Using the tool provided by us, you can streamline
                    you grocery shopping, especially when purchasing from online.
                    Simply click on recipes you want to make, and
                    plan your next grocery shopping by purchasing
                    exactly what you need.
                </p>
            </div>
            <div className={css.linkSection}>
                <div className={css.navHeader}>USEFUL LINKS</div>
                <Link to="/terms" className={css.navTitle}>About</Link>
                <Link to="/privacy" className={css.navTitle}>Privacy Policies</Link>
                <Link to="/terms" className={css.navTitle}>Contact Us</Link>
                <Link to="/terms" className={css.navTitle}>Term of Use</Link>
            </div>
        </div>
        <hr className={css.headerHr}></hr>
        <div className={css.signup}>
            <span className={css.signupText}>Signup for free</span>
            <CustomButton onclick={() => ({})} text={'SIGN UP!'} additionalClass={css.signupButton}></CustomButton>
        </div>
        <div className={css.copyright}>© 2020 Copyright: mealcravings.com</div>
    </div>);
};