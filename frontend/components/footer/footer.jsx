import React from 'react';
import { Link, Redirect } from 'react-router-dom';


class Footer extends React.Component {
    constructor(props) {
        super(props);


    }

    render () {
        return (
            <footer className="footer-box">
                <div className="footer-box-flex-left">
                    <div className="footer-logo">Handmade</div>
                    <div className= "footer-slogan">From our family to yours</div>
                </div>
                <div className="footer-box-flex-right">
                    <div className="footer-copyright">&copy; 2019 Handmade, Inc.</div>
                    <a className="footer-git" href="http://www.github.com/r0ckf0rd/handmade"><i className="fab fa-github"/>Github</a>
                    <a className="footer-linkedin" href="http://www.linkedin.com/in/nicholas-werner-7971606b/"><i className="fab fa-linkedin"/>LinkedIn</a>
                    <a className="footer-personal" href="https://nicholas-werner.com"><i className="fas fa-user-astronaut"/>Personal</a>
                </div>
            </footer>
        )
    }
}

export default Footer;