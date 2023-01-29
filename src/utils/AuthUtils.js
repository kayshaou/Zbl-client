import ApiUtils from "./ApiUtils";
import { Cookies } from "react-cookie";
import Constant from "./Constants";
/* request for auth token */
/* deposit every request with bearer token */
const AuthUtils = {
  /* this method requests for token */
  requestToken: () => {
    return ApiUtils.get("/auth");
  },
  headersConf: () => {
    let bearToken = Cookies.get(Constant.bearerToken);
    return {
      path: "/",
      httpOnly: true,
      Authorization: bearToken
        ? "Bearer " + bearToken
        : "" /* if theres bearer token, not expired this will be included into the request*/,
      contentType: "application/json",
    };
  },
};

export default AuthUtils;
