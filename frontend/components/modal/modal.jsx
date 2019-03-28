import React from 'react';
import SignInForm from './session/signin_form_container';
import SignUpForm from './session/signup_form_container';

class Modal extends React.Component {
  constructor(props) {
    super(props);
 

  }

  render() {
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
        </div>
      </div>
    )
  }
}

export default Modal;