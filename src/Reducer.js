import {LoginIdChange,NameChange} from './Action';

const intialState={
    loginId:"",
    name:""
}
export default function Reducer(state=intialState,action){
    console.log(action);
    switch(action.type){
        case LoginIdChange: return{
            ...state,
            loginId:action.payload
        }
        case NameChange: return{
            ...state,
            name:action.payload
        } 
        default:return{
            ...state
        }
    }

}