import React, { useState } from "react";
import ApiUtils from "../utils/ApiUtils";
function Order(props) {
  const [orderStatus, setOrderStatus] = useState("New");
  const [id, setId] = useState("");
  const [htmlUrl, setHtmlUrl] = useState("");

  async function placeOrder(event) {
    event.preventDefault();
    const url = "/kayshaou";
    const res = await ApiUtils.get(url);
    setHtmlUrl(res.data.html_url);
    setId(res.data.id);
    if (res.data.id != undefined) {
      setOrderStatus("Initialized");
    }
  }

  return (
    <div class="my-7 py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      <div class="text-center space-y-2 sm:text-left">
        <div class="space-y-0.5">
          <p class="text-lg text-black font-semibold">Order</p>
          <p class="text-slate-500 font-medium">{id}</p>
          <p class="text-slate-500 font-medium">{htmlUrl}</p>
        </div>
        <button
          class="px-4 py-1 text-sm text-green-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-green-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
          onClick={(e) => placeOrder(e)}
        >
          {id ? "Initialized" : "Place"}
        </button>
      </div>
    </div>
  );
}

export default Order;
