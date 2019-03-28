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
        return(
            <>
                <form className="session-form" onSubmit={this.handleSubmit}>
                    <h3 className="modal-form-header">{this.props.formType}</h3>
                    <label>
                        Email Address:
                        <br/>
                        <input ref={(input) => this.emailInput = input } type="text" value={this.state.email}
                            onChange={this.handleChange('email')} />
                        <span className="email-errors">{this.state.emailError}</span>
                    </label>
                    <br/>
                    <label>
                        Password:
                        <br/>
                        <input ref={(input) => this.passwordInput = input} type="password" value={this.state.password}
                                onChange={this.handleChange('password')} />
                        <span className="password-errors">{this.state.passwordError}</span>
                    </label>
                    <br/>
                    <input className="submit" type="submit" value={this.props.formType}/>
                </form>
            </>
        )
    }

}

export default SessionForm;