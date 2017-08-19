import React from 'react';

export default class Header extends React.Component {
  render() {
     var Style = {
      paddingLeft: "12px"
    };
    return (
<div className="row" style={Style}>
      <h4 className="text-center">Register Account</h4>
      <form className="col offset=s4 s4">
      <div className="row">
        <div className="input-field col s12">
          <input  id="email" type="text" className="validate" />
          <label htmlfor="email">Email</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input  id="password" type="text" className="validate" />
          <label htmlfor="password">Password</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input  id="confirmPassword" type="text" className="validate" />
          <label htmlfor="confirmPassword">Confirm Password</label>
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
