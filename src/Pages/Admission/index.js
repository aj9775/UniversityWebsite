import React from 'react';
import classes from './Admission.module.css';
import { withRouter} from 'react-router-dom';
import "react-multi-carousel/lib/styles.css";
import Header from '../../Components/Layout/Header/Header.js';
import Footer from '../../Components/Layout/Footer/Footer.js';
import img1 from '../../Assets/man-wearing-gray-dress-shirt-and-blue-jeans-3184317.jpg';
import img2 from '../../Assets/six-woman-standing-and-siting-inside-the-room-1181622.jpg';
import img3 from '../../Assets/woman-falling-in-line-holding-each-other-1206059.jpg';
import img4 from '../../Assets/parker-gibbons-kfwPJieZVwI-unsplash.jpg';

const Admission=(props)=>{
    return(
        <div className={classes.AdmissionDiv}>
            <div className={classes.MainDiv}>
                <div className={classes.ImageDiv} style={{backgroundImage: `url("${img4}")`}}></div>
                <div className={classes.MainBody}>
                    <div className={classes.Stat}>
                        <div className={classes.StatRow}>
                            <p>6,994</p>
                            <p>Undergraduate Students</p>
                        </div>
                        <div className={classes.StatRow}>
                            <p>Class of 2023</p>
                            <p>from 77 countries + 48 states</p>
                        </div>
                        <div className={classes.StatRow}>
                            <p>9,390</p>
                            <p>Graduate Students</p>
                        </div>
                    </div>
                    <div className={classes.LevelPage}>
                        <div className={classes.LevelName}><p>Undergraduate</p></div>
                        <div className={classes.LevelBody}>
                            <div className={classes.LeftBody}>
                                <div className={classes.Info}>
                                    <label>Undergraduate Admission</label>
                                    <div className={classes.LevelInfo}>About 1,700 freshmen and 30 transfer students are admitted to Stanford each year. We review each applicant with an eye to academic excellence, intellectual vitality and personal context.</div>
                                    <div className={classes.Link}>Undergraduate Admission {'>'}</div>
                                </div>
                                <div className={classes.Info}>
                                    <label>Undergraduate Admission</label>
                                    <div className={classes.LevelInfo}>About 1,700 freshmen and 30 transfer students are admitted to Stanford each year. We review each applicant with an eye to academic excellence, intellectual vitality and personal context.</div>
                                    <div className={classes.Link}>Undergraduate Admission {'>'}</div>
                                </div>
                                <div className={classes.InfoSmall}>
                                    <label>Profile of Class 2023</label>
                                    <div className={classes.Link}>Class of 2023 {'>'}</div>
                                </div>
                            </div>
                            <div className={classes.RightImage}style={{backgroundImage: `url("${img1}")`}}></div>
                        </div>
                    </div>
                    <div className={classes.LevelPage} style={{height:'150vh'}}>
                        <div className={classes.LevelName}><p>Post Graduate</p></div>
                        <div className={classes.LevelBody}>
                            <div className={classes.LeftBody}style={{marginTop:'1%'}}>
                            <div className={classes.Info} style={{height:'30%'}}>
                                    <label>Graduate Admission</label>
                                    <div className={classes.LevelInfo}>More than 65 departments and programs offer graduate and professional degrees at Stanford. Admission requirements vary greatly among them.</div>
                                    <div className={classes.Link}>Graduate Admission {'>'}</div>
                                </div>
                                <div className={classes.Info}>
                                    <label>Financing Graduate Studies</label>
                                    <div className={classes.LevelInfo}>The cost of graduate study at Stanford — and the resources available for financial support — vary by degree, school and enrollment status. About 82% of Stanford graduate students receive financial assistance.</div>
                                    <div className={classes.Link}>Graduate Student Funding {'>'}</div>
                                </div>
                                <div className={classes.Info}>
                                    <label>Vice Provost for Graduate Education</label>
                                    <div className={classes.LevelInfo}>The Office of the Vice Provost for Graduate Education offers information for prospective students of the nearly 100 departments and programs offering graduate degrees.</div>
                                    <div className={classes.Link}>VPGE Information for Prospective Students {'>'}</div>
                                </div>
                            </div>
                            <div className={classes.RightImage}style={{backgroundImage: `url("${img2}")`}}></div>
                        </div>
                    </div>
                    <div className={classes.LevelPage}>
                        <div className={classes.LevelName}><p>International</p></div>
                        <div className={classes.LevelBody}>
                            <div className={classes.LeftBody}>
                            <div className={classes.Info}>
                                    <label>International Admission</label>
                                    <div className={classes.LevelInfo}>About 700 freshmen and 10 transfer  interanational students are admitted to XYZ each year. We review each applicant with an eye to academic excellence, intellectual vitality and personal context.</div>
                                    <div className={classes.Link}>International Admission {'>'}</div>
                                </div>
                                <div className={classes.Info}>
                                    <label>International Financial Aid</label>
                                    <div className={classes.LevelInfo}>There is a wide variety of scholarship's available for international students. Along with scholarship's International students are also elligible for teaching assistantship's and research assistantships.</div>
                                    <div className={classes.Link}>International Student Funding {'>'}</div>
                                </div>
                                <div className={classes.InfoSmall}>
                                    <label>Profile of Class 2022</label>
                                    <div className={classes.Link}>Class of 2022 {'>'}</div>
                                </div>
                            </div>
                            <div className={classes.RightImage}style={{backgroundImage: `url("${img3}")`}}></div>
                        </div>
                    </div>
                    <div className={classes.FinanceInfo}>
                        <div className={classes.FinanceHeading}>
                            <p>Financial Aid</p>
                            <p>We are committed to making a world-class education affordable.</p>
                        </div>
                        <div className={classes.FinanceRow}>
                            <div className={classes.FinanceColumn}>
                                <p>About 80%</p>
                                <p>of all students receive financial aid</p>
                            </div>
                            <div className={classes.FinanceColumn}>
                                <p>Tuition covered</p>
                                <p>for undergrads with family incomes below $150,000</p>
                            </div>
                        </div>
                        <div className={classes.FinanceRow}>
                            <div className={classes.FinanceColumn}>
                                <p>Tuition, room {'&'} board covered</p>
                                <p>for undergrads with family incomes below $65,000</p>
                            </div>
                            <div className={classes.FinanceColumn}>
                                <p>Graduate aid available</p>
                                <p>based on available funds and academic merit</p>
                            </div>
                        </div>
                        <div className={classes.FinanceLink}>
                            <p>More about Financial Aid</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Admission)
