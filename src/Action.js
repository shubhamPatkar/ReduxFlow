
 const LoginIdChange = "LoginIdChange";
 const NameChange = "NameChange";

const LoginIdChangeOn=(data)=>{
    return{
        type:LoginIdChange,
        payload:data
    }
}
const NameChangeOn=(data)=>{
    return{
        type:NameChange,
        payload:data
    }
}
export {LoginIdChangeOn,NameChangeOn,LoginIdChange,NameChange}