/* global chrome */

import React from "react";

import { AppWrapper } from "./style";

const handleClick = () => {
  chrome.tabs.query({ currentWindow: true, active: true }, ([activeTab]) => {
    chrome.tabs.sendMessage(activeTab.id, { message: "start" });
  });
};

export default () => (
  <AppWrapper>
    I am the popup from the Chrome Extension template!{" "}
    <button onClick={handleClick}>Click me!</button>
  </AppWrapper>
);
