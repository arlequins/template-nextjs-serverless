import env from "@/constants/env";
import AbstractApiService from "./AbstractApiService"
import { AxiosHeaders } from "axios";

const { api: commonApi } = new AbstractApiService({
  base: env.api.common.uri,
  headers: new AxiosHeaders({
    'Content-Type': 'application/json',
    'x-api-key': env.api.common.key,
  })
});

export default commonApi;
