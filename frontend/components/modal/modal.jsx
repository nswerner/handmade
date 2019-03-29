import React from 'react';
import SignInForm from './session/signin_form_container';
import SignUpForm from './session/signup_form_container';

class Modal extends React.Component {
  constructor(props) {
    super(props);
 
    this.handleDemo = this.handleDemo.bind(this);
  }

  handleDemo() {
    this.props.demoLogin(this.props.demoUser);
    this.props.closeModal();
  }

  render() {
    const demo = 
      <div className="demo-div">
        <input className="form-demo" type="submit" value="Demo" onClick={this.handleDemo} />

        <p className="session-lorem">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

    let modal;

    switch (this.props.modal) {
      case 'signin':
        modal = <SignInForm closeModal={this.props.closeModal}/>
        break;
      case 'signup':
        modal = <SignUpForm closeModal={this.props.closeModal}/>
        break;
      default:
        return null;
    }

    return (
      <div className="modal-background" onClick={this.props.closeModal}>
        <div className="modal-foreground" onClick={e => e.stopPropagation()}>
          { modal }
          { demo }
        </div>
      </div>
    )
  }
}

export default Modal;