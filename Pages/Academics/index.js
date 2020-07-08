import React from 'react';
import classes from './Academics.module.css';
import Header from '../../Components/Layout/Header/Header.js';
import Footer from '../../Components/Layout/Footer/Footer.js';
import img1 from '../../Assets/library-high-angle-photro-159775.jpg';
import img2 from '../../Assets/people-wearing-backpacks-1454360.jpg';
import img3 from '../../Assets/group-of-people-watching-on-laptop-1595385.jpg';
import { withRouter} from 'react-router-dom';
const Academics=(props)=>{
    return(
        <div className={classes.AdmissionDiv}>
            <div className={classes.MainDiv}>
                <div className={classes.ImageDiv} style={{backgroundImage: `url("${img1}")`}}></div>
                <div className={classes.MainBody}>
                    <div className={classes.Stat}>
                        <div className={classes.StatRow}>
                            <p>2,180</p>
                            <p>Faculty members</p>
                        </div>
                        <div className={classes.StatRow}>
                            <p>5:1</p>
                            <p>Student-to-faculty ratio</p>
                        </div>
                        <div className={classes.StatRow}>
                            <p>90+</p>
                            <p>Graduate fields of study</p>
                        </div>
                    </div>
                    <div className={classes.LevelPage}>
                        <div className={classes.LevelName}><p>Undergraduate</p></div>
                        <div className={classes.LevelBody}>
                            <div className={classes.LeftBody}>
                                <div className={classes.Info} style={{height:'30%'}}>
                                    <label>Undergraduate Education</label>
                                    <div className={classes.LevelInfo}>Stanford Undergrad is your guide to undergraduate academics and opportunities run by the Vice Provost for Undergraduate Education.</div>
                                    <div className={classes.Link}>XYZ Undergrad {'>'}</div>
                                </div>
                                <div className={classes.Info} style={{height:'30%'}}>
                                    <label>Majors</label>
                                    <div className={classes.LevelInfo}>Explore the more than 65 major fields of undergraduate study at Stanford.</div>
                                    <div className={classes.Link}>Explore Majors {'>'}</div>
                                </div>
                                <div className={classes.Info} style={{height:'30%'}}>
                                    <label>Undergraduate Facts {'&'} Figures</label>
                                    <div className={classes.LevelInfo}>Approximately 7,000 undergraduate students attend Stanford.  Learn more about the undergraduate program and student body.</div>
                                    <div className={classes.Link}>Facts about Undergraduate program {'>'}</div>
                                </div>
                            </div>
                            <div className={classes.RightImage}style={{backgroundImage: `url("${img2}")`}}></div>
                        </div>
                    </div>
                    <div className={classes.LevelPage} >
                        <div className={classes.LevelName}><p>Post Graduate</p></div>
                        <div className={classes.LevelBody}>
                            <div className={classes.LeftBody}>
                            <div className={classes.Info}>
                                    <label>Office of the Vice Provost for Graduate Education</label>
                                    <div className={classes.LevelInfo}>The VPGE office works collaboratively across the University to ensure that every graduate student has the best possible education.</div>
                                    <div className={classes.Link}>Graduate Education {'>'}</div>
                                </div>
                                <div className={classes.Info}>
                                    <label>Graduate Facts {'&'} Figures</label>
                                    <div className={classes.LevelInfo}>Today, more than 9,300 master’s, doctoral, and professional degree students are pursuing graduate degrees in all seven of Stanford’s schools.  Learn more about graduate studies at Stanford.</div>
                                    <div className={classes.Link}>Facts about Graduate studies {'>'}</div>
                                </div>
                            </div>
                            <div className={classes.RightImage}style={{backgroundImage: `url("${img3}")`}}></div>
                        </div>
                    </div>
                    <div className={classes.ExtraInfo}>
                        <div className={classes.ExtraInfoHeading}>
                            <p>Other Resources {'&'} links</p>
                        </div>
                        <div className={classes.ColumnBody}>
                            
                        <div className={classes.InfoColumn}>
                            <div className={classes.Row}>
                                <div className={classes.RowHeading}>
                                    <p>Academic Calender {'&'}</p>
                                    <p>Courses</p>
                                </div>
                                <div className={classes.RowList}>
                                    <ul>
                                        <li>Academic Calender</li>
                                        <li>Course Catalog</li>
                                        <li>Office of the Registrar</li>
                                    </ul>
                                </div>
                            </div>
                        </div>  
                        <div className={classes.InfoColumn}>
                            <div className={classes.Row}>
                                <div className={classes.RowHeading}>
                                    <p>Departments{'&'}Programs </p>
                                </div>
                                <div className={classes.RowList}>
                                    <ul>
                                        <li>Departments A to Z</li>
                                        <li>Interdisciplinary Programs</li>
                                    </ul>
                                </div>
                            </div>
                        </div>  
                        <div className={classes.InfoColumn}>
                            <div className={classes.Row}>
                                <div className={classes.RowHeading}>
                                    <p>Lifelong Learning</p>
                                </div>
                                <div className={classes.RowList}>
                                    <ul>
                                        <li>Business Executive Ed</li>
                                        <li>Continuing Studies</li>
                                        <li>Law Executive ED</li>
                                        <li>Pre-College Studies</li>
                                        <li>Professional Development (SCPD)</li>
                                        <li>Summer Session</li>
                                    </ul>
                                </div>
                            </div>
                        </div>  
                        <div className={classes.InfoColumn}>
                            <div className={classes.Row}>
                                <div className={classes.RowHeading}>
                                    <p>Online Learning</p>
                                </div>
                                <div className={classes.RowList}>
                                    <ul>
                                        <li>Study Online</li>
                                    </ul>
                                </div>
                            </div>
                        </div></div>                            
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Academics)
