import React from 'react';
import classes from './Header.module.css';
import Admission from '../../../Pages/Admission';
import {withRouter} from 'react-router-dom';

const Header=(props)=>{
    const AdmissionClick=()=>{
        props.history.push("/Admission")
    }
    const AcademicsClick=()=>{
        props.history.push("/Academics")
    }
    const ResearchClick=()=>{
        props.history.push("/Research")
    }
    const HomeClick=()=>{
        props.history.push("/Home")
    }
    return(
        <div className={classes.Header}>
            <div className={classes.TopHeader}>
                <div className={classes.TopRightBody}>
                <div className={classes.ExtraText}>Apply</div>
                <div className={classes.ExtraText}>Visit</div>
                <div className={classes.ExtraText}>Donate</div>
                <div className={classes.ExtraText}>Students</div>
                <div className={classes.ExtraText}>Parents</div>
                <div className={classes.ExtraText}>Faculty and Staff</div>
                <div className={classes.ExtraText}>Alumini</div>
                </div>
            </div>
            <div className={classes.BottomHeader}>
                <div className={classes.LeftBody}>
                    <div className={classes.CollegeLogo}
                    onClick={HomeClick}></div>
                </div>
                <div className={classes.RightBody}>
                    <div className={classes.MenuText}
                    onClick={AdmissionClick}>Admissions</div>
                    <div className={classes.MenuText}
                    onClick={AcademicsClick}>Academics</div>
                    <div className={classes.MenuText}
                    onClick={ResearchClick}>Research</div>
                    <div className={classes.MenuText}
                    // onClick={StudentClick}
                    style={{cursor:'default'}}
                    >Student Life</div>
                    <div className={classes.MenuText}
                    style={{cursor:'default'}}
                    // onClick={AboutClick}
                    >About</div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Header);
