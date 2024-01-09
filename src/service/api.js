import { apis } from "service";

const COMMON_URL = `https://0efd0d-ion6-sandbox.dhiwise.co/device/auth/`;

const API_URLS = {
  FORGOT_PASSWORD: `${COMMON_URL}forgot-password`,
  LOGIN_DEVICE_AUTH: `${COMMON_URL}login`,
};

export const forgotPassword = (payload) =>
  apis.post(API_URLS.FORGOT_PASSWORD, payload);

export const loginDeviceAuth = (payload) =>
  apis.post(API_URLS.LOGIN_DEVICE_AUTH, payload);
