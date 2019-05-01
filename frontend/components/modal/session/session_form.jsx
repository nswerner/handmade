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
            this.props.history.push('/products');
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

            this.header = 
                <div className="modal-form-header signin-header">
                    <h1 className="modal-form-h1"> Sign in to continue </h1>
                    <span className="modal-form-header-span"> </span>
                </div>  

            this.submit = <input className="signin-submit session-submit" type="submit" value={this.props.formType} />
        } else {
            this.header =
                <div className="modal-form-header">
                    <h1 className="modal-form-h1"> Create your account </h1>
                    <span className="modal-form-header-span"> Registration is easy.</span>
                </div>

            this.submit = <input className="session-submit" type="submit" value={this.props.formType} />
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
                    
                    {this.submit}

                    <br/>

                    
                </form>
            </>
        )
    }

}

export default SessionForm;