import styles from '../../styles/loading.module.css'

const Loading = () => {
  return (
    <div>
      <div className={styles.card}>
        <div className={styles.card_load}></div>
        <div className={styles.card_load_extreme_title} ></div>
        <div className={styles.card_load_extreme_descripion} ></div>
      </div>
    </div>
  );
};

export default Loading;
