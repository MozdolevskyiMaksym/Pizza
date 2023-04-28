/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ResponseGenerator {
  config?: unknown;
  data?: never;
  headers?: unknown;
  request?: unknown;
  status?: number;
  statusText?: string;
}

export type ActionType = {
  type: string;
  payload?: any;
  [key: string]: unknown;
};
