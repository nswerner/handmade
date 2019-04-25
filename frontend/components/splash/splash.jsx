import React from 'react';

class Splash extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {

        return(
            <div className="splash-box">
                <img onClick={() => this.props.openModal('signin')} className="handmade-splash" src="https://s3.amazonaws.com/handmade-seeds/handmade_splash.jpg" alt=""/>
                <br/>
                <br/>
                <img onClick={() => this.props.openModal('signin')} className="handmade-subsplash" src="https://s3.amazonaws.com/handmade-seeds/handmade_subsplash.jpg" alt=""/>
            </div>
        )
    }

}



export default Splash;