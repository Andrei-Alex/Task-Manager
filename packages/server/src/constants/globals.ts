import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
export const swaggerDescription =
  'This is a Kanban project Server based on the OpenAPI 3.0 specification.';
export const projectVersion = '0.0.2';
