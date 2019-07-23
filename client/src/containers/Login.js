import React, { Component } from "react";
import { login } from "../services/api";
import { signup } from "../services/api";

export default class Login extends Component {
  state = {
    signupUsername: "",
    signupPassword: "",
    email: "",
    loginUsername: "",
    loginPassword: "",
    error: ""
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    const { loginUsername, loginPassword } = this.state;

    event.preventDefault();

    login(loginUsername, loginPassword)
      .then(data => {
        this.props.setUser(data);
        this.props.history.push("/projects");
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleSubmit2 = event => {
    const { signupUsername, signupPassword } = this.state;
    event.preventDefault();

    signup(signupUsername, signupPassword)
      .then(data => {
        this.props.setUser(data);
        this.props.history.push("/projects");
      })
      .catch(err => {
        this.setState({error: err.response.data.message});
      });
  };


loginPopup = e => {
  const signupBtn = document.getElementById('signup');
	let parent = e.target.parentNode.parentNode;
	Array.from(e.target.parentNode.parentNode.classList).find((element) => {
		if(element !== "slide-up") {
			parent.classList.add('slide-up')
		}else{
			signupBtn.parentNode.classList.add('slide-up')
			parent.classList.remove('slide-up')
		}
	});
};

signupPopup = e => {
  const loginBtn = document.getElementById('login');
	let parent = e.target.parentNode;
	Array.from(e.target.parentNode.classList).find((element) => {
		if(element !== "slide-up") {
			parent.classList.add('slide-up')
		}else{
			loginBtn.parentNode.parentNode.classList.add('slide-up')
			parent.classList.remove('slide-up')
		}
	});
};
  

  render() {
    return (
    <div className="form-body">
    <div className="form-structor">
      <div className="signup">
        <h2 className="form-title" id="signup" onClick={this.signupPopup}><span>or</span>Sign up</h2>
        <div className="form-holder">
          <input type="text" className="input" name="signupUsername" id="signupUsername" value={this.state.username} onChange={this.handleChange} placeholder="Username" />
          <input type="email" className="input" placeholder="Email" />
          <input type="password" className="input" name="signupPassword" id="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" />
        </div>
        {this.state.error && (
          <p className="warning">{this.state.error} </p>
        )}
        <button className="submit-btn" onClick={this.handleSubmit2}>Sign up</button>
      </div>
 
      <div className="login slide-up">
        <div className="center">
          <h2 className="form-title" onClick={this.loginPopup} id="login"><span>or</span>Log in</h2>
          <div className="form-holder">
          <input type="text" className="input" name="loginUsername" id="loginUsername" value={this.state.username} onChange={this.handleChange} placeholder="Username" />
          <input type="password" className="input" name="loginPassword" id="loginPassword" value={this.state.password} onChange={this.handleChange} placeholder="Password" />
          </div>
          <button className="submit-btn" onClick={this.handleSubmit}>Log in</button>
        </div>
      </div>
    </div>
    </div>
    )
  }
}
