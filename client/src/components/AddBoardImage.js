import React, { Component } from "react";

// import the service file since we need it to send (and get) the data to(from) server
import service from '../api/service';

class AddBoardImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        //   name: "",
          imageUrl: ""
        };
    }
    
    handleChange = e => {  
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    // this method handles just the file upload
    handleFileUpload = e => {
        console.log("The file to be uploaded is: ", e.target.files[0]);

        const uploadData = new FormData();
        uploadData.append("imageUrl", e.target.files[0]);
        
        service.handleUpload(uploadData)
        .then(response => {
            this.setState({ imageUrl: response.secure_url });
          })
          .catch(err => {
            console.log("Error while uploading the file: ", err);
          });
    }

    handleSubmit = e => {
        e.preventDefault();
        
        service.saveNewImg(this.state)
        .then(res => {
            console.log('added: ', res);
            // here we would redirect to some other page 
        })
        .catch(err => {
            console.log("Error while adding the image: ", err);
        });
    }  
    
    render() {
        return (
          <div>
            <h2>New Image</h2>
            <form onSubmit={e => this.handleSubmit(e)}>
                <input 
                    type="file" 
                    onChange={(e) => this.handleFileUpload(e)} /> 
                <button type="submit">Save new image</button>
            </form>
          </div>
        );
    }
}

export default AddBoardImage;