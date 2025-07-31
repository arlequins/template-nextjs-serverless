import env, { EnvStage } from "@/constants/env";
import { DATETIME_FORMAT, setTime } from "./date";
import axios from "axios";

/* eslint-disable no-console */
export const loggingInfo = (error: unknown) => {
  if (env.stage === EnvStage.TEST) {
    return;
  }
  console.info('[INFO]', error);
};

export const loggingDebug = (obj: unknown) => {
  if (env.stage !== EnvStage.PRODUCTION && env.stage !== EnvStage.TEST) {
    console.debug('[DEBUG]', obj);
  }
};

const normalizeError = (error: unknown) => {
  const isPayloadSingleError =
    Object.prototype.hasOwnProperty.call(error, 'e') ||
    Object.prototype.hasOwnProperty.call(error, 'msg');

  if (isPayloadSingleError) {
    const rawError = error as {
      e: unknown;
      msg: string;
    };
    return {
      error: rawError.e,
      msg: rawError.msg,
    };
  }

  // update for logging axios error
  if (axios.isAxiosError(error)) {
    try {
      return {
        error,
        msg: error.response?.data ?? 'No response data',
      };
    } catch (e) {
      loggingDebug(e);
    }
  }

  return {
    error,
  };
};

export const loggingError = (name: string, e: unknown) => {
  if (env.stage === EnvStage.TEST) {
    return;
  }

  const { error, msg } = normalizeError(e);

  const trackingKeyword = `[tracking-${setTime().format(DATETIME_FORMAT)}-${name}]`;

  console.error('[ERROR]', trackingKeyword, {
    msg,
    error,
  });
};
