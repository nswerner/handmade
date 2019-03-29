import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            email: "",
            password: "",
            emailError: "",
            passwordError: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
    }

    handleChange(field) {
        return e => {
            this.setState({ [field]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state).then( () => {
            this.setState({ email: "", password: "" });
            return this.props.closeModal();
        });
    }

    handleDemo(e) {
        if (this.props.formType === "Sign Up") {
            e.stopPropagation();
            e.preventDefault();
        }

        const demoUser = this.props.demoUser;
        this.setState({ email: demoUser.email, password: demoUser.password });
        this.props.demoLogin(demoUser).then( () => {
            return this.props.closeModal();
        });
    }


    componentDidUpdate() {
        if (this.props.errors.length > 0) {   
            if (this.props.errors[0].includes("email")) {

                this.emailInput.focus();
                this.setState({ emailError: this.props.errors.shift(), passwordError: "" });

            } else if (this.props.errors[0].includes("Password")) {

                this.passwordInput.focus();
                this.setState({ passwordError: this.props.errors.shift(), emailError: "" });

            }
        }
    }

    

    render() {
       this.header = <></>

        if (this.props.formType === "Sign In") {
            this.header = <h1 className="modal-form-header"> Sign in to continue </h1>
        } else {
            this.header =
                <div className="modal-form-header">
                    <h1 className="modal-form-h1"> Create your account </h1>
                    <span className="modal-form-header-span"> Registration is easy.</span>
                </div>
        }

        return(
            <>
                <form className="session-form" onSubmit={this.handleSubmit}>

                    {this.header}

                    <label> Email address </label>

                    <input ref={(input) => this.emailInput = input } className="email-input" type="text" value={this.state.email}
                        onChange={this.handleChange('email')} />
                    <span className="email-errors">{this.state.emailError}</span>
                    
                    <br/>

                    <label> Password </label>

                    <input ref={(input) => this.passwordInput = input} className="password-input" type="password" value={this.state.password}
                            onChange={this.handleChange('password')} />
                    <span className="password-errors">{this.state.passwordError}</span>

                    <br/>
                    
                    <input className="session-submit" type="submit" value={this.props.formType}/>

                    <br/>

                    <span className="light-gray-horizontal-border">
                        <label className="or"> OR </label>
                    </span>
                    
                    {/* <input className="form-demo" type="submit" value="Demo" onClick={() => this.handleDemo()} /> */}
                    <button className="form-demo">Demo</button>

                    <p className="session-lorem">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </form>
            </>
        )
    }

}

export default SessionForm;