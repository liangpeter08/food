import * as React from 'react';
import css from './contactUs.css';

export default function ContactUs() {
    return (
        <div className={css.contactContainer}>
            <div className={css.contactText}>
                Name
            </div>
            <div className={css.contactText}>
                Email Address
            </div>
            <div className={css.contactText}>
                Message
            </div>
        </div>
    );
}