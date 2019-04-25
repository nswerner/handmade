import React from 'react';
import { Link } from "react-router-dom";
import CurrencyInput from 'react-currency-input';

class ProductForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.product;
        
        this.saveLength = 0;

        this.handleFiles = this.handleFiles.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.createDefaultSquares = this.createDefaultSquares.bind(this);
        this.createPreviewSquares = this.createPreviewSquares.bind(this);
        this.createUploadSquare = this.createUploadSquare.bind(this);
        this.createSavedSquares = this.createSavedSquares.bind(this);
        this.handleFileReader = this.handleFileReader.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
        this.publishButton = this.publishButton.bind(this);
    }

    handleFileReader(fileReader, file) {
        fileReader.onloadend = () => {

            this.setState(prevState => ({
                pictureFiles: [...prevState.pictureFiles, file ]
            }))
            // const newPictureFiles = this.state.pictureFiles;
            // newPictureFiles.push(file);
    
            this.setState(prevState => ({
                pictureURLs: [...prevState.pictureURLs, fileReader.result]
            }))

            // const newPictureURLs = this.state.pictureURLs;
            // newPictureURLs.push(fileReader.result);
            // this.setState({ pictureFiles: newPictureFiles, pictureURLs: newPictureURLs });
        }
    }

    handleFiles(e) {

        const files = e.currentTarget.files;
        for (let idx = 0; idx < files.length;idx += 1) {
            const file = files[idx];
            const fileReader = new FileReader();
            this.handleFileReader(fileReader, file);
            // Issue?: inside the fat arrow function, 'this' was fileReader
            // fileReader.onloadend = () => {
            //     const newPictureFiles = this.state.pictureFiles;
            //     newPictureFiles.push(file);

            //     const newPictureURLs = this.state.pictureURLs;
            //     newPictureURLs.push(fileReader.result);
            //     this.setState({ pictureFiles: newPictureFiles, pictureURLs: newPictureURLs });
            // }
            
            fileReader.readAsDataURL(file);
        }

    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('product[title]', this.state.title);
        formData.append('product[description]', this.state.description);
        formData.append('product[price]', this.state.price);

        if (this.state.pictureFiles.length > 0) {

            for (let i = 0; i < this.state.pictureFiles.length; i++) {
                formData.append('product[product_pictures][]', this.state.pictureFiles[i]);
            }
        }



        return $.ajax({
            url: `${this.props.path}`,
            method: `${this.props.ajaxMethod}`,
            data: formData,
            contentType: false,
            processData: false
            }).then( (response) => {
                this.setState(this.props.defaultState); 
                const newId = Object.keys(response.products)[0]
                this.props.history.push(`/products/${newId}`)       
            }
        );
    }


    handleChange(field) {

        return (e) => {
            this.setState({ [field]: e.currentTarget.value });
        }

    }

    handlePriceChange(event, maskedvalue, floatvalue) {

        this.setState({ price: parseFloat(event.target.value.slice(2)) });
    }

    createDefaultSquares(number) {
        const squares = [];
        const iClasses = [
            <i className="fas fa-robot"/>,
            <i className="fas fa-tshirt"/>,
            <i className="fas fa-mask"/>,
            <i className="fas fa-coffee"/>,
            <i className="fas fa-guitar"/>,
            <i className="fas fa-hat-wizard"/>,
            <i className="fas fa-chair"/>,
            <i className="fas fa-chess"/>,
            <i className="fas fa-horse"/>
        ]

        for (let idx = 0; idx < number; idx ++) {
            squares.push(
                <li key={`default-${idx}`} className="default-square">
                    <div className="inner-default-square">
                        {iClasses[idx]}
                    </div>
                </li>
            )
        }

        return squares;
    }


    createPreviewSquares(number) {
        const squares = [];


        for (let idx = 0; idx < number; idx += 1) {
            let preview;
        
            preview = <img className="preview-image" src={this.state.pictureURLs[idx]}/>

            squares.push(
                <li key={`preview-${idx}`} className="preview-square">
                    <div className="inner-preview-square">
                        {preview}
                    </div>
                </li>
            )
        }

        return squares;
    }

    createSavedSquares(number) {
        const squares = [];

        for (let idx = 0; idx < number; idx += 1) {
            const preview = <img className="preview-image" src={this.state.pictureFiles[idx]} />

            squares.push( 
                < li key={`preview-${idx}`}
                    className = "preview-square" >
                    <div className="inner-preview-square">
                        {preview}
                    </div>
                </li >
            )
        }

        return squares;
    }


    createUploadSquare() {
        return(
            <li className="upload-square">
                <div className="inner-upload-square">
                    <div className="innermost-upload-square">
                        <i className="fa fa-camera" aria-hidden="true"></i>
                        <br/>
                        <input className="file-input" type="file" multiple onChange={this.handleFiles}/>
                    </div>
                </div>
            </li>
        )
    }

    componentDidMount() {

        if (this.props.ajaxMethod === "PATCH") {
            this.props.fetchProduct().then( (response) => {
                const product  = Object.values(response.product)[0];
                let title = product.title;
                let description = product.description;
                let price = product.price;
                let pictureFiles = product.productPictures;
                
                this.setState({title: title, description: description, price: price, pictureFiles: pictureFiles});
                
                const savedSquares = this.createSavedSquares(pictureFiles.length);
                this.saveLength = pictureFiles.length;
                this.setState({savedSquares: savedSquares})
            });
        }
    }

    publishButton() {
        let submit;

        if (
            this.state.title === "" ||  
            this.state.description === "" || 
            this.state.price === "" || 
            this.state.pictureFiles.length === 0
        ) {
            submit = <span className="listing-form-submit span-publish-placeholder" >Complete the form to publish</span>
        } else {
            submit =  <input className="listing-form-submit" type="submit" value={this.props.formType} />
        }

        return submit;
    }


    render() {
        
        let previewSquares;
        if (this.state.pictureURLs) {
            previewSquares = this.createPreviewSquares(this.state.pictureURLs.length);
        } else {
            previewSquares = this.createPreviewSquares(0);
        }

        let previewLength = previewSquares.length;
        let defaultLength = 9 - previewLength - this.saveLength;
        let defaultSquares = this.createDefaultSquares(defaultLength);

        let uploadSquare;
        if ( (this.saveLength + previewLength + defaultSquares.length) > 9 ) {
            uploadSquare = null;
        } else {
            uploadSquare = this.createUploadSquare();
        }

        this.submit = this.publishButton()
    

        return (
            <div className="form-component-box">
                <Link className="back-link" to="/shopManager"> <i className="fas fa-angle-left"/> Back to listings</Link>
                <h1 className="form-listing-component-header">{this.props.h1}</h1>
                <form className="form-box" onSubmit={this.handleSubmit}>

                    <div className="photo-section">

                        <div className="left-col">
                            <label className="pictures-label">
                                <h2 className="listing-form-h2">Photos * </h2>
                                <p className="about-pictures">
                                    Use up to ten photos to show your item's most important qualities.
                                    <br />
                                    <br />
                                    Tips:
                                </p>
                                <ul className="picture-tips">
                                    <li key={0}> Use natural light and no flash.            </li>
                                    <li key={1}> Include a common object for scale.         </li>
                                    <li key={2}> Show the item being held, worn, or used.   </li>
                                    <li key={3}> Shoot a clean, simple background.  </li>
                                </ul> 
                            </label>
                        </div>

                        <div className="right-col">
                            <ul className="file-squares-ul">
                                {this.state.savedSquares}
                                {previewSquares}
                                {uploadSquare}
                                {defaultSquares}
                            </ul>
                        </div>
                    
                    </div>

                    <div className="title-section">

                        <div className="left-col">
                            <label className="title-label" id="title-connected">
                                <h2 className="listing-form-h2">Title * </h2>
                                <p className="about-title">
                                    Include keywords that buyers would use to search for your item.
                                </p>
                            </label>
                        </div>
                        
                        <div className="right-col">
                            <input id="title-target" className="title-input" type="text" value={this.state.title} onChange={this.handleChange('title')} />
                        </div>

                    </div>


                    <div className="description-section">
                    
                        <div className="left-col">
                            <label className="description-label">
                                <h2 className="listing-form-h2">Description * </h2>
                                <p className="about-description">
                                    Start with a brief overview that describes your item's finest features.

                                    List details like dimensions and key features in easy-to-read bullet points.

                                    Tell buyers a bit about your process or the story behind this item.
                                </p>
                             </label>
                        </div>

                        <div className="right-col">
                            <textarea className="description-textarea" name="" cols="30" rows="10" value={this.state.description} onChange={this.handleChange('description')}></textarea>
                        </div>
                    </div>

                    <div className="price-section">
                    
                        <div className="left-col">
                            <label className="price-label">
                                <h2 className="listing-form-h2">Price * </h2>
                                <p className="about-price">
                                    Factor in the costs of materials and labor, plus any related business expenses.
                                    Consider the total price buyers will pay too—including shipping.
                                </p>
                            </label>
                        
                        </div>

                        <div className="right-col">
                            <CurrencyInput className="price-input" prefix="$ " value={this.state.price} onChangeEvent={() => this.handlePriceChange(event)}/>
                            {/* <input className="price-input" type="number" value={this.state.price} onChange={this.handleChange('price')} />  */}
                        </div>

                    </div>

                    {this.submit}
                </form>
            </div>
        );
    }
};


export default ProductForm;