import styles from './DisplayHealth.module.scss';
import { HealthResponse } from '../../services';

/**
 * Display status of health point.
 *
 * ## usage
 * ```jsx
 * <div>
 *  <p>Status</p>
 * </div>
 * ```
 * @param {string} text - Button text
 * @param {string} id - id
 * @return {JSX}
 */
export const DisplayHealth = ({ status }: HealthResponse) => {
  return (
    <div className={styles['container']}>
      <p>Status : {status || 'No status'}</p>
    </div>
  );
};

export default DisplayHealth;
