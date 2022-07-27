import { useEffect,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { usercontext } from '../App';

const Logout=()=>{

const {state,dispatch}=useContext(usercontext);
const navigate = useNavigate();
useEffect(()=>{
    fetch('/logout',{
        method:'GET',
        headers: {
            "Content-Type": "application/json"
        },
    }).then((res)=>{
        // console.log(res);
        if (res.status !== 200) {
            const error = new Error(res.error);
            throw error;
          }
        dispatch({type:"USER",payload:false});
        navigate("/Login");
    }).catch((err)=>{
        console.log(err);
    });
},[]);

return(
    <h1>Hello in Logout page</h1>
);
};

export default Logout;