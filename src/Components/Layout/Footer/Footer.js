import React from 'react'
import classes from './Footer.module.css'

const Footer=()=>{
    return(
        <div className={classes.FooterDiv}>
            <div className={classes.MainFooter}>
                <div className={classes.LeftFooter}>
                    <div className={classes.Footer}>
                        <label>Explore</label>
                        <ul>
                            <li>Botanic Gardens</li>
                            <li>Careers</li>
                            <li>XYZ chronicle</li>
                            <li>Global</li>
                            <li>Itacha</li>
                            <li>Library</li>
                            <li>Locations</li>
                            <li>Museum</li>
                        </ul>
                    </div>
                    <div className={classes.Footer}>
                    <label>Resources</label>
                    <ul>
                            <li>Academic Calendar</li>
                            <li>XYZ info</li>
                            <li>Emergency</li>
                            <li>Events</li>
                            <li>Live View</li>
                            <li>Maps</li>
                            <li>Operating Status</li>
                            <li>People Search</li>
                            <li>weather</li>
                        </ul>
                    </div>
                    <div className={classes.Footer}>
                    <label>Campus</label>
                    <ul>
                            <li>Caring Community</li>
                            <li>Accessibility</li>
                            <li>Diversity</li>
                            <li>For Media</li>
                            <li>Leadership</li>
                            <li>Share</li>
                            <li>Support XYZ</li>
                            <li>Sustainablity</li>
                        </ul>
                    </div>
                </div>
                <div className={classes.RightFooter}>
                    {/* <Map/> */}
                </div>
            </div>
            <div className={classes.BottomFooter}>
                <div className={classes.BottomLeft}>
                    Display current weather
                </div>
                <div className={classes.BottomCenter}>
                    <ul>
                        <li>Copyright</li>
                        <li>Site Information</li>
                        <li>Privacy Notice</li>
                        <li>Contact</li>
                        <li>Feedback</li>
                        <li>Web Accessibility Assistance</li>
                    </ul>
                </div>
                <div className={classes.BottomRight}>
                    <div className={`${classes.Icon1} ${classes.Icon}`}></div>
                    <div className={`${classes.Icon2} ${classes.Icon}`}></div>
                    <div className={`${classes.Icon3} ${classes.Icon}`}></div>
                    <div className={`${classes.Icon4} ${classes.Icon}`}></div>
                </div>
            </div>
        </div>
    )
}
export default Footer
