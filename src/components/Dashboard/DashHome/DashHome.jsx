import { useSelector } from "react-redux";
import styles from './DashHome.module.css'
import { TableForms } from "./TableForms/TableForms";

export default function DashHome() {
  const { values } = useSelector(state => state.value);

  const renderModelForms = () => {
    if (values && values.modelforms && values.modelforms.length > 0) {
      return (
        <TableForms forms={values.modelforms} />
      );
    } else {
      return null;
    }
  }

  return (
    <div className={styles.dashhome}>
      {renderModelForms()}
    </div>
  );
}
