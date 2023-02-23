import { connect } from "react-redux"
import { useSelector } from 'react-redux';

 function Component2(props){
    const LoginId = useSelector(state => state.loginId);
  const Name = useSelector(state => state.name);
    return(
        <h3>
        Hi I' from Component2
        Id is {Name} 
         Name is {LoginId}
        </h3>
    )
}
const mapStateToProps = (data)=>({
data
})
export default connect(mapStateToProps,{})(Component2);