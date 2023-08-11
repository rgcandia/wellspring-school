import { useDispatch, useSelector } from "react-redux";
import SendForm from './SendForm/SendForm.jsx'
import { useEffect } from "react";
import { TableForms } from "./TableForms/TableForms.jsx";
import { getForms } from "../../socket.js";
import { uploadModels, uploadValues } from "../../redux/slice.js";
import LoaderDash from './LoaderDash/LoaderDash.jsx'
import styles from './DashHome.module.css'



export default function DashHome() {
  const dispatch = useDispatch()
  const { forms ,user} = useSelector(state => state.data);
  const admin = "admin@wellspring.edu.ar"
  useEffect(()=>{
    getForms(dispatch,uploadValues,uploadModels)
  },[forms])
                                             
  return (
    <div className={styles.dashhome}>
      
    {user===admin && forms?<SendForm/>:null}
  
    {forms&&<TableForms forms={forms}/>}
     {(!forms&&user)&&<LoaderDash/>} 
    </div>
  );
}
