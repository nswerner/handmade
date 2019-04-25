import React from 'react';
import SignInForm from './session/signin_form_container';
import SignUpForm from './session/signup_form_container';

class Modal extends React.Component {
  constructor(props) {
    super(props);
 
    this.handleDemo = this.handleDemo.bind(this);
  }

  handleDemo() {
    this.props.demoLogin(this.props.demoUser).then( () => {
      this.props.history.push('/products');
      this.props.closeModal();
    });
  }

  render() {
    const demo = 
      <div className="demo-div">
        <input className="form-demo" type="submit" value="Demo" onClick={this.handleDemo} />

        <p className="session-lorem">
          By signing in or registering, you agree to Handmade's Terms of Use and Privacy Policy. Handmade may send you communications; you may change your preferences in your account settings. 
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
          <span className="light-gray-horizontal-border">
            <label className="or"> OR </label>
          </span>
          { modal }
          { demo }
        </div>
      </div>
    )
  }
}

export default Modal;