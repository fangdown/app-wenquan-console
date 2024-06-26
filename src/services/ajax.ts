import axios from "axios";
import { message } from "antd";
import { getToken } from "../utils/user-token";

const DEV_BASE_API = "http://localhost:11011";
// const PRO_BASE_API = 'https://api.git123.cn:11011';
const PRO_BASE_API = "http://localhost:11011";
const API =
  process.env.NODE_ENV === "development" ? DEV_BASE_API : PRO_BASE_API;
const instance = axios.create({
  baseURL: API, // url = base url + request url
  timeout: 10 * 1000,
});

// request 拦截：每次请求都带上 token
instance.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = `Bearer ${getToken()}`; // JWT 的固定格式
    return config;
  },
  (error) => Promise.reject(error)
);

// response 拦截：统一处理 errno 和 msg
instance.interceptors.response.use((res) => {
  const resData = (res.data || {}) as ResType;
  const { errno, data, msg } = resData;

  if (errno !== 0) {
    // 错误提示
    if (msg) {
      message.error(msg);
    }

    throw new Error(msg);
  }

  return data as any;
});

export default instance;

export type ResType = {
  errno: number;
  data?: ResDataType;
  msg?: string;
};

export type ResDataType = {
  [key: string]: any;
};
