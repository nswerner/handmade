import React from 'react';
import { Link } from 'react-router-dom';


class Footer extends React.Component {
    constructor(props) {
        super(props);


    }

    /* <Link className="footer-personal" to="wwww.hand-made.app">Nicholas Werner</Link> */ 
    render () {
        // CHANGE THIS PERSONAL LINK TO LOAD PERSONAL SITE
        return (
            <footer className="footer-box">
                <div className="footer-box-flex-left">
                    <div className="footer-logo">Handmade</div>
                    <div className= "footer-slogan">From our family to yours</div>
                </div>
                <div className="footer-box-flex-right">
                    <div className="footer-copyright">&copy; 2019 Handmade, Inc.</div>
                    <Link className="footer-git" to="www.github.com/r0ckf0rd/handmade"><i className="fab fa-github"/>Github</Link>
                    <Link className="footer-linkedin" to="www.linkedin.com/in/nicholas-werner-7971606b/"><i className="fab fa-linkedin"/>LinkedIn</Link>
                </div>
            </footer>
        )
    }
}

export default Footer;