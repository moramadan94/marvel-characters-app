import {translate} from '@utils/helpers';
import {APIError} from '@utils/types';
import axios from 'axios';

export const handleApiError = (error: unknown): APIError => {
  if (axios.isAxiosError(error)) {
    const response = error.response;
    if (response) {
      // Handle different HTTP

      switch (response.status) {
        case 400:
          return {
            message: translate('errors.badRequest'),
            code: 400,
            status: response.statusText,
          };
        case 401:
          return {
            message: translate('errors.unauthorized'),
            code: 401,
            status: response.statusText,
          };
        case 403:
          return {
            message: translate('errors.somethingWrong'),
            code: 403,
            status: response.statusText,
          };
        case 404:
          return {
            message: translate('errors.wrongRequest'),
            code: 404,
            status: response.statusText,
          };
        case 500:
          return {
            message: translate('errors.internalError'),
            code: 500,
            status: response.statusText,
          };
        default:
          return {
            message:
              response.data?.message || translate('errors.somethingWrong'),
            code: response.status,
            status: response.statusText,
          };
      }
    } else if (error.request) {
      // No response was received from the server
      return {
        message: translate('errors.connectionTimeout'),
        code: 0,
        status: 'No Response',
      };
    } else {
      // Error setting up the request
      return {
        message: error.message,
        code: 0,
        status: translate('errors.requestError'),
      };
    }
  } else {
    // Handle unexpected errors
    return {
      message: translate('errors.unexpectedError'),
      code: 0,
      status: 'Unexpected Error',
    };
  }
};
