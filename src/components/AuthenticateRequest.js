import React, { useState } from "react";
import ApiUtils from "../utils/ApiUtils";
import AuthUtils from "../utils/AuthUtils";
import { useCookies, Cookies } from "react-cookie";
import Constants from "./../utils/Constants";

function AuthenticateRequest(props) {
  const [auth, setAuth] = useState("Unauthorized");
  const [cookies, setCookie] = useCookies([Constants.bearerToken]);

  const requestToken = async (evt) => {
    evt.preventDefault();
    let res = "";
    try {
      res = await ApiUtils.get("/kayshaou"); //AuthUtils.requestToken();
      console.log(res);
      const msg = res.status === 200 ? res.data.id : "not-found";
      setCookie(Constants.bearerToken, msg, AuthUtils.headersConf);
    } catch (error) {
      console.error(error.code + " not found", error);
      setCookie(Constants.bearerToken, error.code, AuthUtils.headersConf);
    }
  };

  const setToken = () => {};
  return (
    <div class="my-7 py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      <div class="text-center space-y-2 sm:text-left">
        <div class="space-y-0.5">
          <p class="text-lg text-black font-semibold">
            Authentication Status: {cookies.brTkn}
          </p>
          <p class="text-slate-500 font-medium">{auth}</p>
        </div>
        <button
          onClick={(e) => requestToken(e)}
          disabled={cookies.brTkn}
          class="px-4 py-1 text-sm text-pink-600 font-semibold rounded-full 
        border border-purple-200 hover:text-pink hover:bg-pink-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
        >
          {cookies.brTkn ? "Token obtained" : "Request"}
        </button>
      </div>
    </div>
  );
}

export default AuthenticateRequest;
