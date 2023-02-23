import React, { useState,useEffect } from 'react';
import { connect } from 'react-redux';
import { useSelector,useDispatch } from 'react-redux';
import {NameChangeOn,LoginIdChangeOn} from './Action'

function Component1(props){
    
    const LoginId = useSelector(state => state.loginId);
    const Name = useSelector(state => state.name);
    return(
        <h2>
        <p>Hello Im from component 1</p>
        Name:<input type="text" onChange={(e)=>{props.NameChangeOn(e.target.value)}} />
        <br/>{LoginId}<br/>
        Id:<input type="text" onChange={(e)=>{props.LoginIdChangeOn(e.target.value)}} />
        <br/>{Name}
        </h2>
    )
}
const mapStateToProps=(state)=>({    
    state
})

export default connect(mapStateToProps,{NameChangeOn,LoginIdChangeOn})(Component1);