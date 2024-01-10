import styles from "../../styles/loading.module.css";

const Loading = () => {
  return (
    <>
      <div className={styles.loading_container}>
        <div className={styles.spinner}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Loading;
