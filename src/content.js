/* global document, chrome */

const onStart = () => {
  const element = document.createElement("div");
  element.style.cssText = `
  margin: 0 auto;
  display: block;
  width: 400px;
  text-align: center;
  padding: 20px;
  background: rebeccapurple;
  color: #FFF;
`;

  element.innerText = "I am in the DOM from the Chrome Extension template!";

  document.body.prepend(element);
};

chrome.extension.onMessage.addListener(({ message }) => {
  if (message === "start") {
    onStart();
  }
});
