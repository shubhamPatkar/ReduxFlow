import React from 'react';
import { connect } from 'react-redux';
import Component1 from './Component1';
import Component2 from './Component2';
import { useSelector } from 'react-redux';
import {NameChangeOn,LoginIdChangeOn} from './Action'

function App(props) {
  const LoginId = useSelector(state => state.loginId);
  const Name = useSelector(state => state.name);

    return (
        <div>
            <h1>React Redux App loginId {LoginId} Name is {Name}</h1>
            Name:<input type="text" onChange={(e)=>{props.NameChangeOn(e.target.value)}} />
            <br/>{LoginId}<br/>
            Id:<input type="text" onChange={(e)=>{props.LoginIdChangeOn(e.target.value)}} />
            <br/>{Name}
            <Component1/>
            <Component2/>
        </div>
    );
}
const mapStateToProps = (data)=>({
  data
  })

export default connect(mapStateToProps,{NameChangeOn,LoginIdChangeOn})(App);