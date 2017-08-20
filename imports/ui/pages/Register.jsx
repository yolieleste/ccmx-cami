import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import createBrowserHistory from 'history/lib/createBrowserHistory'
const history = createBrowserHistory()

export default class Header extends React.Component {
  
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  
   onSubmit(e){
    e.preventDefault();
     {/*console.log(e.target)*/}
    var ele = $(e.target);
    var email =ele.find("#email").val();
    var password =ele.find("#password").val();
    {/*console.log(email, password, confirmPassword);*/}
     if (email === 'yoyo' && password ==='yoyo01'){
        this.props.history.push("GVbUJTQAKrJarocholiEleste")
     }else if(password === ""){
        Materialize.toast('Password could not be empty', 4000) // 4000 is the duration of the toast
     }
     else{
        Materialize.toast('"“Once we accept our limits, we go beyond them." -- Albert Einstein', 4000) // 4000 is the duration of the toast
     }
        
   }
  render() {
    return (
<div className="row">
      <h4 className="text-center">Log in</h4>
      <form onSubmit={this.onSubmit} className="col s12 m4 offset-m4 l4 offset-l4">
      <div className="row">
        <div className="input-field col s12">
          <input  id="email" type="text" className="validate" />
          <label htmlFor="email">Email</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input  id="password" type="password" className="validate" />
          <label htmlFor="password">Password</label>
        </div>
      </div>
      <div className="row">
       <button className="waves-effect waves-light btn btn-block">Submit</button> 
      </div>
    </form>
  </div>
    );
  }
}
