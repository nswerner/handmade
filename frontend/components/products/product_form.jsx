import React from 'react';
import { Link } from "react-router-dom";

class ProductForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.defaultState;
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.submitForm(this.state).then( () => {
            this.setState({defaultState})
        });
    }

    handleChange(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value });
        }

    }

    render() {

        return(
            <div className="form-component-box">
                <Link className="back-link" to="/shopManager"> <i className="fas fa-angle-left"/> Back to listings</Link>
                <h1 className="form-listing-component-header">{this.props.h1}</h1>
                <div className="form-box">

                    <form className="listing-form" onSubmit={this.handleSubmit}>

                        <div className="picture-input-box">

                            <label className="pictures-label"> 
                                <h2 className="listing-form-h2">Product Pictures:</h2> 
                                <p className="about-pictures">
                                    Use up to ten photos to show your item's most important qualities.
                                    <br/>
                                    Tips:
                                    <ul className="picture-tips">
                                        <li key={0}> Use natural light and no flash.            </li>
                                        <li key={1}> Include a common object for scale.         </li>
                                        <li key={2}> Show the item being held, worn, or used.   </li>
                                        <li key={3}> Shoot against a clean, simple background.  </li>
                                    </ul> 
                                </p>
                            </label>

                            <input className="file-input" type="file" />
                        </div>

                        <div className="title-box">
                            <label className="title-label">Title: 
                                <p className="about-title">Include keywords that buyers would use to search for your item.</p>
                            </label>

                            <input className="title-input" type="text" value={this.state.title} onChange={this.handleChange('title')}/>
                        </div>

                        <div className="description-box">
                            <label className="description-label">Description: </label>
                            <textarea className="description-textarea" name="" cols="30" rows="10" value={this.state.description} onChange={this.handleChange('description')}></textarea>
                        </div>

                        <div className="price-box">
                            <label className="price-label">Price: </label>
                            <input className="price-input" type="float" value={this.state.price} onChange={this.handleChange('price')}/>
                        </div>


                        
                        <input className="listing-form-submit" type="submit" value={this.props.formType}/>
                    
                    
                    </form>
                 </div>
            </div>
        )
    }
}



export default ProductForm;