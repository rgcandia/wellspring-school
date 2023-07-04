import styles from './Index.module.css'
import image from '../../images/aerea_ws.jpg'
import BoxInstitucional from './BoxInstitucional/BoxInstitucional'
export default function Index (){
    return(<div className={styles.container}>

<div className={styles.box1}>
    <img className={styles.image}  alt={image} src={image}/>
</div>
<div className={styles.box2}>
   <BoxInstitucional/>
</div>
<div className={styles.box3}>Datos Utiles</div>
<div className={styles.box4}>K - P - S</div>
<div className={styles.box5}>MAPA - FORM</div>

</div>)
}