
        return(
            <div className="form-component-box">
                <Link className="back-link" to="/shopManager"> <i className="fas fa-angle-left"/> Back to listings</Link>
                <h1 className="form-listing-component-header">{this.props.h1}</h1>
                <div className="form-box">


                    <div className="product-form-left-col">

                       against  <label className="pictures-label"> 
                            <h2 className="listing-form-h2">Photos: </h2>
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
                        <label className="title-label" id="title-connected">
                            <h2 className="listing-form-h2">Title: </h2>
                            <p className="about-title">
                                Include keywords that buyers would use to search for your item.
                            </p>
                        </label>

                    </div>

                    <div className="product-form-right-col">
                        <form className="listing-form" onSubmit={this.handleSubmit}>

                            <ul className="file-squares-ul">
                                {previewSquares}
                                {uploadSquare}
                                {defaultSquares}
                            </ul>
                            <br/>
                            <br/>
                            <input id="title-target" className="title-input" type="text" value={this.state.title} onChange={this.handleChange('title')} />
                        </form>
                    </div>



                         <div className="picture-input-box"> 




                            <div className="photo-form-right-side">
                                <div className="upload-photo-square">
                                     <input className="file-input" type="file" multiple onChange={e => this.setState({ pictureFiles: e.target.files })} /> 
                                </div>
                                <div className="file-preview-box">
                                    <ul className="file-squares-ul">
                                        {previewSquares}
                                        {uploadSquare}
                                        {defaultSquares}
                                    </ul>
                                </div>
                            </div>
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
}
