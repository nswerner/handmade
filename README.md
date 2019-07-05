# README

## About Handmade
Handmade is a clone of Etsy, an online merchant community that allows users to buy and sell handmade and vintage goods. Users can register an account to shop for products as well as list/update products for sale. Users can search for products by title from any page with the search bar. Users can also view and leave reviews of products. In the next release, users will be able to filter products by categories.

Product Index
<a href="#"><img src="https://github.com/r0ckf0rd/handmade/blob/master/app/assets/images/ProductIndex.png" /></a>
<br /> <br />

Shopping Cart 
<a href="#"><img src="https://github.com/r0ckf0rd/handmade/blob/reviews/app/assets/images/ShoppingCart.png" /></a>
<br /> <br />


## Live
[Handmade](https://www.hand-made.app)

## Web Archive Reference
This version of Handmade was styled to match Etsy.com on March 20th, 2019.
[March 20th, 2019](http://web.archive.org/web/20190320192053/https://www.etsy.com/)

## Technology
* Git
* Postgresql
* Ruby on Rails
* JBuilder
* React
* Redux
* Heroku

## Key Feature: Image Uploads
One of the most exciting features is the image upload form present when adding/managing listings. There are four types of squares present in the display:
* images saved in the database
* images previewed from the current upload
* upload square
* default sqaures

The squares dynamically render based on how many images have been previously saved and uploaded in the current session. 

```javascript
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
```

   
Previously Saved Photos [![PreviouslySavedPhoto](https://github.com/r0ckf0rd/handmade/blob/reviews/app/assets/images/PhotoUploadForm.png)](#) <br/><br/>

Newly Saved Photos [![NewlySavedPhoto](https://github.com/r0ckf0rd/handmade/blob/reviews/app/assets/images/UploadedPhoto.png)](#) <br/><br/>

