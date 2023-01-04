import { styles, IButton } from '.';

/**
 * Simple Button.
 *
 * ## Usage
 * ```jsx
 * <div>
 *  <p>Text AdditionalText</p>
 * </div>
 * ```
 * @param {string} text - Button text
 * @param {boolean} additionalText - Toogle Display text
 * @param {string} background - Background color
 * @param {string} color - Text color
 * @return {JSX} Display text in JSX elements
 */
export const Button = ({
  text,
  additionalText = false,
  background = 'green',
  color,
}: IButton) => {
  return (
    <div
      style={{ backgroundColor: background }}
      className={styles['container']}
    >
      <p style={{ color: color }}>
        {text}
        {additionalText ? ' Here !' : ''}
      </p>
    </div>
  );
};

export default Button;
