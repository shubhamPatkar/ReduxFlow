import React, { useState,useEffect } from 'react';
import { connect } from 'react-redux';
import { useSelector,useDispatch } from 'react-redux';
import {NameChangeOn,LoginIdChangeOn} from './Action'

function Component1(props){
    useEffect(()=>{
        console.log("Props is "+JSON.stringify(props));
    },[])
    const [name,setName] = useState('');
    const [id,setId]=useState("");
    const {NameChangeOn,LoginIdChangeOn,NameChange,LoginIdChange} = props;
    return(
        <h2>
        <p>Hello Im from component 1</p>
        Name:<input type="text" onChange={(e)=>{props.NameChangeOn(e.target.value)}} />
        <br/>{props?.state?.name}<br/>
        Id:<input type="text" onChange={(e)=>{props.LoginIdChangeOn(e.target.value)}} />
        <br/>{props?.state?.loginId}
        </h2>
    )
}
const mapStateToProps=(state)=>({    
    state
})

// const mapDispatchToProps = (dispatch) =>({
//     NameChangeOn:()=>dispatch(NameChangeOn()),
//     LoginIdChangeOn:() => dispatch(LoginIdChangeOn())
// })
export default connect(mapStateToProps,{NameChangeOn,LoginIdChangeOn})(Component1);