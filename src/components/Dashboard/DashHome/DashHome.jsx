import { useSelector } from "react-redux";
import SendForm from './SendForm/SendForm.jsx'
import styles from './DashHome.module.css'
import { useEffect } from "react";


export default function DashHome() {
  const { values ,user} = useSelector(state => state.value);
  const admin = "admin@wellspring.edu.ar"
                                             
  return (
    <div className={styles.dashhome}>
      
    {user===admin?<SendForm/>:null}


      
    </div>
  );
}
