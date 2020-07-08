import React from 'react'
import classes from './Home.module.css'
import { withRouter} from 'react-router-dom';
import Carousel from "react-multi-carousel";
import { Image } from "semantic-ui-react";
import {responsive} from '../../Constants';
import "react-multi-carousel/lib/styles.css";
import Header from '../../Components/Layout/Header/Header.js';
import Footer from '../../Components/Layout/Footer/Footer.js';
import img1 from '../../Assets/muzammil-soorma-9MByoiBNN1c-unsplash.jpg';
import img2 from '../../Assets/parker-gibbons-kfwPJieZVwI-unsplash.jpg';
import img3 from '../../Assets/auditorium-benches-chairs-class-207691.jpg';
import img4 from '../../Assets/five-women-laughing-936048.jpg';

const Home=(props)=>{
    let images= [img1, img2, img3, img4];
    return(
        <div className={classes.HomeDiv}>
            <div className={classes.MainDiv}>
                <div className={classes.ImageCarousel}>
                    <Carousel
                        ssr
                        //   partialVisbile
                        //   deviceType={deviceType}
                        itemClass="image-item"
                        arrows={false}//disabling default arrow
                        responsive={responsive}
                        draggable
                        autoPlay
                        autoPlaySpeed={2000}
                        infinite
                        //use the above two to give custom arrow to the carousel
                        >
                        {images.slice().map(image => {
                            return (
                            <Image
                                draggable={false}
                                style={{ width: "100%", height: "70vh" }}
                                src={image}
                            />
                            );
                        })}
                    </Carousel>
                </div>
                <div className={classes.MainBody}>
                    <div className={classes.InnerBody}>
                        <div className={classes.LeftBody}>
                            <div className={classes.ExtraSpace}>

                            </div>
                            <div className={classes.LeftImage}>

                            </div>
                            <div className={classes.MainInfo}>
                                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                            </div>
                        </div>
                        <div className={classes.RightBody}>
                            <div className={classes.RightImage}>

                            </div>
                            <div className={classes.MainInfo}>
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>    
                            </div>
                            <div className={classes.ExtraSpace}>
                                
                            </div>
                        </div>
                    </div>
                    <div className={classes.InnerBody}>
                        <div className={classes.LeftBody}>
                            <div className={classes.ExtraSpace}>

                            </div>
                            <div className={classes.LeftImage}>

                            </div>
                            <div className={classes.MainInfo}>
                                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                            </div>
                        </div>
                        <div className={classes.RightBody}>
                            <div className={classes.RightImage}>

                            </div>
                            <div className={classes.MainInfo}>
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>    
                            </div>
                            <div className={classes.ExtraSpace}>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.BlankSpace}></div>
            </div>
        </div>
    )
}
export default withRouter(Home)
