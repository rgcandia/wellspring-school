import styles from './Index.module.css'
import image from '../../images/aerea_ws.jpg'
export default function Index (){
    return(<div className={styles.container}>

<div className={styles.box1}>
    <img className={styles.image}  alt={image} src={image}/>
</div>
<div className={styles.box2}>INSTITUCIONAL</div>
<div className={styles.box3}>box3</div>
<div className={styles.box4}>box3</div>
<div className={styles.box5}>box4</div>

</div>)
}