import { useDispatch, useSelector } from "react-redux";
import SendForm from './SendForm/SendForm.jsx'
import { useEffect } from "react";
import { TableForms } from "./TableForms/TableForms.jsx";
import { getForms } from "../../socket.js";
import { uploadValues } from "../../redux/slice.js";
import LoaderDash from './LoaderDash/LoaderDash.jsx'
import styles from './DashHome.module.css'


export default function DashHome() {
  const dispatch = useDispatch()
  const { values ,user} = useSelector(state => state.value);
  const admin = "admin@wellspring.edu.ar"
  useEffect(()=>{
    getForms(dispatch,uploadValues)
  },[values])
                                             
  return (
    <div className={styles.dashhome}>
      
    {user===admin && values?<SendForm/>:null}
    {values&&<TableForms forms={values}/>}
     {!values&&<LoaderDash/>} 
    </div>
  );
}
