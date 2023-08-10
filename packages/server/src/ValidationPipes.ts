import { ValidationError, ValidatorOptions } from 'class-validator';

/**
 * Options for configuring the behavior of the ValidationPipe.
 */
export interface ValidationPipeOptions extends ValidatorOptions {
  /**
   * Indicates whether to automatically transform payloads to their correct types.
   */
  transform?: boolean;
  /**
   * Indicates whether to disable error messages in the response payload.
   */
  disableErrorMessages?: boolean;
  /**
   * Factory function to create a custom exception based on validation errors.
   * @param errors Array of validation errors.
   * @returns Custom exception object.
   */
  exceptionFactory?: (errors: ValidationError[]) => any;
}
