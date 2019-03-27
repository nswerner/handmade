import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
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
        this.props.action(this.state);
        this.setState({email: "", password: ""});
        this.props.closeModal();
    }

    render() {
        return(
            <>
                <form className="session-form" onSubmit={this.handleSubmit}>
                    <h3 className="modal-form-header">{this.props.formType}</h3>
                    <label>
                        Email Address:
                        <br/>
                        <input type="text" value={this.state.email} onChange={this.handleChange('email')}/>
                    </label>
                    <br/>
                    <label>
                        Password:
                        <br/>
                        <input type="password" value={this.state.password} onChange={this.handleChange('password')}/>
                    </label>
                    <br/>
                    <input className="submit" type="submit" value={this.props.formType}/>
                </form>
            </>
        )
    }

}

export default SessionForm;