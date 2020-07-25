import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {TextField, Button} from '@material-ui/core';
import './Login.css';
import img from './../../assets/images/loginleft.jpg'


const classes = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));


class Login extends Component {
  constructor(){
    super();
    this.state = {
        username :'',
        password : '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);


  }

  handleSubmit = () => {

  }

 
  

  render(){
    return (
        <div className="Container">
            <div className="leftContainer">
              <img style={{width: '100%'}} src = {img} alt= "WELCOME" />
            </div>
            <div className="rightContainer">
              {this.renderForm()}
              <div className="clickableLabel">
                <div> <label className="label">New User Registration </label> </div>
                <div> <label className="label">forgot password</label> </div>
              </div>
            </div>
        </div>
        
      );
  }

  renderForm(){
      return(
        <form className="formContainer" >
            <div>
                <TextField
                  required
                  id="outlined-required"
                  label="Username"
                  defaultValue=""
                  variant="outlined"
                />
            </div>
           <div>
                <TextField
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  variant="outlined"
                />
           </div>
            <div>
              <Button variant="contained" size="medium" color="primary" className={classes.margin}>
                LOGIN
              </Button>
            </div>
        </form>
      )
  }

}

export default Login;
