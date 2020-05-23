import React from 'react';
import css from './mainPageContent.css';
import CustomButton from '../../components/customButton/customButton';
import BlogContent from '../blogContent/blogContent';

export default function MainPageContent() {
    return (
        <div className={css.body}>
            {/* <div className={css.backgroundWhite}>
            </div> */}
            <div className={css.backgroundBlur}>
            </div>
            <div className={css.backgroundPic}>
                <div className={css.backgroundPicContent}>
                    <div className={css.topIntro}>
                    </div>
                    <div className={css.mainIntro}>
                        Browse For Recipes
                    </div>
                    <div className={[css.mainIntro, css.subIntro].join(' ')}>
                        create your own shopping cart
                    </div>
                    <div className={css.content}>
                        <CustomButton text={"Let's Get Started"} onclick={() => { }} />
                    </div>
                </div>
            </div>
            <div className={css.backgroundBlur2}>
            </div>
            <BlogContent></BlogContent>
        </div>
    );
}