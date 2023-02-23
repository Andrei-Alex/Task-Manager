import styles from './DisplayHealth.module.scss';
import { HealthResponse } from '../../services';

/**
 * Display status of health point.
 *
 * ## Usage
 * ```jsx
 * <div>
 *  <p>Status</p>
 * </div>
 * ```
 * @param {string} status - Fetched status as string
 * @return {JSX} Display text in JSX elements
 */
export const DisplayHealth = ({ status }: HealthResponse) => {
  return (
    <div className={styles['container']}>
      <p>Status : {status || 'No status'}</p>
    </div>
  );
};

export default DisplayHealth;