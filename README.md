# README

## About Handmade
Handmade is a clone of Etsy, an online merchant community that allows users to buy and sell handmade and vintage goods. In the most recent release, site visitors can register an account. Users can view items for sale from other users and list/update products for sale. In the next release, cart functionality will be added.

## Live
[Handmade](handmade-with-love.herokuapp.com)

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

   
Photo Upload Form ![PhotoUploadForm](https://github.com/r0ckf0rd/handmade/blob/reviews/app/assets/images/PhotoUploadForm.png) <br/><br/>