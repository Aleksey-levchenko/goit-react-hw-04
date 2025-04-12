import { ClipLoader } from "react-spinners";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <ClipLoader
        size={80}
        color="#646cff"
        loading={true}
        aria-label="clip-loader"
      />
    </div>
  );
};

export default Loader;
