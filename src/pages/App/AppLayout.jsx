import Sidebar from "../../components/SideBar/Sidebar";
import Map from "../../components/Map/Map";
import styles from "./Css/AppLayout.module.css";

export default function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
    </div>
  );
}
