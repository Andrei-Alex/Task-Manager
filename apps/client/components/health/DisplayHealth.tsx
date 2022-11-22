import styles from './DisplayHealth.module.scss';
import { HealthResponse } from 'apps/client/services';

export const DisplayHealth = ({ status }: HealthResponse) => {
  return (
    <div className={styles['container']}>
      <p>Status : {status || 'No status'}</p>
    </div>
  );
};

export default DisplayHealth;
