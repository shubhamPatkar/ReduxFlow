import { connect } from "react-redux"
import { useSelector } from 'react-redux';
import {NameChangeOn,LoginIdChangeOn} from './Action'

 function Component2(props){
    const LoginId = useSelector(state => state.loginId);
  const Name = useSelector(state => state.name);
    return(
        <h3>
        <p>Hello Im from component 2</p>
        Name:<input type="text" onChange={(e)=>{props.NameChangeOn(e.target.value)}} />
        <br/>{LoginId}<br/>
        Id:<input type="text" onChange={(e)=>{props.LoginIdChangeOn(e.target.value)}} />
        <br/>{Name}
        </h3>
    )
}
const mapStateToProps = (data)=>({
data
})
export default connect(mapStateToProps,{NameChangeOn,LoginIdChangeOn})(Component2);