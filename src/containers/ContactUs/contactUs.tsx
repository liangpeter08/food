import * as React from 'react';
import css from './contactUs.css';
import CustomButton from '../../components/customButton/customButton';

export default function ContactUs() {
    return (
        <div className={css.contactContainer}>
            <div className={css.infoContainer}>
                <div className={css.contactText}>
                    Name
                <input className={css.containerPadding}></input>
                </div>
                <div className={css.contactText}>
                    Email Address
                    <input className={css.containerPadding}></input>
                </div>
                <div className={css.contactText}>
                    Message
                <input className={css.containerPadding}></input>
                </div>
            </div>
            <div className={css.submitButton}>
                <CustomButton onclick={() => { }} text={'Submit'} />
            </div>
        </div>
    );
}