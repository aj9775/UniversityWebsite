import React from 'react';
import { withRouter } from 'react-router-dom';
//import { TOKEN, USERNAME, ROLE } from '../../Constants';
import Header from './Header/Header'
import Footer from './Footer/Footer'
import classes from './Layout.module.css'
const Layout = (props) => {
    

    return (
        <div className={classes.Layout}>
            <Header />
            <div className={classes.Content}>
                    {props.children}
            </div>
            <Footer />
        </div>
    );
}
export default withRouter(Layout);
