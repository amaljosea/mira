import { CSSProperties } from 'react';
import styles from './LoaderV2.module.css';

interface LoaderV2Props {
  style?: CSSProperties;
}

const LoaderV2: React.FC<LoaderV2Props> = ({ style }) => {
  return (
    <img src="/images/loader.webp" className={styles.loader} style={style} />
  );
}

export default LoaderV2;
