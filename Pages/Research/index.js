import React from 'react';
import classes from './Research.module.css';
import Carousel from 'react-multi-carousel';
import { withRouter} from 'react-router-dom';
import { Image } from "semantic-ui-react";
import {responsive} from '../../Constants';
import "react-multi-carousel/lib/styles.css";
import Header from '../../Components/Layout/Header/Header.js';
import Footer from '../../Components/Layout/Footer/Footer.js';
import img1 from '../../Assets/row-of-books-in-shelf-256541.jpg';
import img2 from '../../Assets/science-in-hd-7mAYDCamwrQ-unsplash.jpg';
import img3 from '../../Assets/science-in-hd-CtAc_yDpB78-unsplash.jpg';
import img4 from '../../Assets/library-high-angle-photro-159775.jpg';
import img5 from '../../Assets/scientist-checking-crops-in-laboratory-3912479.jpg';
import img6 from '../../Assets/selective-focus-photography-of-bookshelf-with-books-1370296.jpg';
import img7 from '../../Assets/six-woman-standing-and-siting-inside-the-room-1181622.jpg';
import img8 from '../../Assets/scientist-in-laboratory-3912374.jpg';
const Research=()=>{

    let images=[img1, img2, img3,img4 ,img5,img6,img7,img8];
    return(
        <div className={classes.ResearchDiv}>
            <div className={classes.mainDiv}>
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
                    <div className={classes.InfoDiv}>
                        <label>Research</label>
                        <div className={classes.Info}>
                        From Nobel Prize winners to undergraduates, all members of the Stanford community are engaged in creating new knowledge.
                        </div>
                    </div>
                    <div className={classes.Stat}>
                        <div className={classes.StatRow}>
                            <p>18 Institutes</p>
                            <p>cross interdisciplinary boundaries</p>
                        </div>
                        <div className={classes.StatRow}>
                            <p>20 Libraries</p>
                            <p>hold over 9.5 million volumes</p>
                        </div>
                        <div className={classes.StatRow}>
                            <p>$1.6 Billion</p>
                            <p>Annual research budget</p>
                        </div>
                    </div>
                    <div className={classes.ImageGrid}>
                        {images.map((img,i)=>{
                            return(
                                <div className={classes.ImageDiv} 
                                style={{backgroundImage: `url("${img}")`}}>
                                    <div className={classes.Imagetext}>
                                        Cloud computing for agility, complexity, and speed.
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className={classes.LevelPage}>
                        <div className={classes.LeftBody}>
                            <div className={classes.LeftLevelBody}>
                                <label>RADICAL COLLABORATION</label>
                                <div className={classes.LeftLevelHeading}>
                                    Multidisciplinary Partnerships
                                </div>
                                <div className={classes.LeftInfo}>
                                The challenges of the world and the big picture of what’s possible rarely fit neatly into a single academic discipline. This is why we’ve made collaboration and communication a way of life at Cornell. We foster a community of renowned scholars that spans disciplines, locations, and industries in order to convert promising ideas and innovations into results that truly matter.
                                </div>
                                <div className={classes.LeftImage}
                                style={{backgroundImage:`url("${img1}")`}}></div>
                                <div className={classes.LinkDiv}>
                                    <div className={classes.Link}>About Undergraduate Research {">"}</div>
                                    <div className={classes.Link}>Getting started in research {">"}</div>
                                    <div className={classes.Link}>Find a reserach oppurtunity {">"}</div>
                                </div>
                            </div>
                            <div className={classes.LeftLevelBody}>
                                <label>RADICAL COLLABORATION</label>
                                <div className={classes.LeftLevelHeading}>
                                    Multidisciplinary Partnerships
                                </div>
                                <div className={classes.LeftInfo}>
                                The challenges of the world and the big picture of what’s possible rarely fit neatly into a single academic discipline. This is why we’ve made collaboration and communication a way of life at Cornell. We foster a community of renowned scholars that spans disciplines, locations, and industries in order to convert promising ideas and innovations into results that truly matter.
                                </div>
                                <div className={classes.LeftImage}
                                style={{backgroundImage:`url("${img1}")`}}></div>
                                <div className={classes.LinkDiv}>
                                    <div className={classes.Link}>About Undergraduate Research {">"}</div>
                                    <div className={classes.Link}>Getting started in research {">"}</div>
                                    <div className={classes.Link}>Find a reserach oppurtunity {">"}</div>
                                </div>
                            </div>
                        </div>
                        <div className={classes.RightBody}>
                            <div className={classes.RightLevelBody}>
                                <div className={classes.RightLevelHeading}>RESEARCH SUPPORT AND FUNDING</div>
                                <div className={classes.RightImage}
                                style={{backgroundImage:`url("${img1}")`}}></div>
                                <div className={classes.RightInfo}>Support for everything from proposal development to grant management—and all the administrative issues in between.
                                </div>
                            </div>
                            <div className={classes.RightLevelBody}>
                                <div className={classes.RightLevelHeading}>RESEARCH SUPPORT AND FUNDING</div>
                                <div className={classes.RightImage}
                                style={{backgroundImage:`url("${img1}")`}}></div>
                                <div className={classes.RightInfo}>Support for everything from proposal development to grant management—and all the administrative issues in between.
                                </div>
                            </div>
                            <div className={classes.RightLevelBody}>
                                <div className={classes.RightLevelHeading}>RESEARCH SUPPORT AND FUNDING</div>
                                <div className={classes.RightImage}
                                style={{backgroundImage:`url("${img1}")`}}></div>
                                <div className={classes.RightInfo}>Support for everything from proposal development to grant management—and all the administrative issues in between.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Research)
