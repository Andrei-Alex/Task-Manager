import styles from './Presentation.module.scss';

/* eslint-disable-next-line */
export interface AtomsProps {}

export function Presentation(props: AtomsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Atoms Lib!</h1>
      <p>This lib is created for practice and will include only Atoms and presentation Components such as color or fonts.</p>
    </div>
  );
}

export default Presentation;
