import React, { Component } from "react";

// import the service file since we need it to send (and get) the data to(from) server
import service from '../api/service';

class AddImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          // name: "",
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
        
        service.saveNewProfileImg(this.state)
        .then(res => {

          this.props.setUser(res.user)
            console.log('added: ', res);
            // here we would redirect to some other page 
        })
        .catch(err => {
            console.log("Error while adding the thing: ", err);
        });
    }  
    
    render() {
        return (
          <div>
            <form onSubmit={e => this.handleSubmit(e)}>
                  <div style={{textAlign:'center'}} >
               <input 
                style={{display:'inline-block',maxWidth:'45vw', padding: '0 0 3vw 0'}}
                    type="file" 
                    onChange={(e) => this.handleFileUpload(e)} /> 
                    </div>
                
                    <div style={{textAlign:'center'}} >
                <button 
                style={{display:'inline-block'}}
                className="submit-img-btn" type="submit">Save new image</button>
                    </div>
            </form>
          </div>
        );
    }
}

export default AddImage;