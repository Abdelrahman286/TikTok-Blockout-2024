document.getElementById("startBlocking").addEventListener("click", () => {
  const usersList = collectEditedList();

  chrome.runtime.sendMessage({ action: "startBlocking", usersList });
});

_el("#load-btn").addEventListener("click", () => {
  fetchUserList();
});

function _el(selector) {
  return document.querySelector(selector);
}

function fetchUserList() {
  const url = chrome.runtime.getURL("blockList.json"); // Adjust if fetching from an external URL
  fetch(url)
    .then((response) => response.json())
    .then((users) => {
      _el("textarea").textContent = "";
      users.forEach((user) => {
        _el("textarea").textContent += `${user} \n`;
      });
    })
    .catch((error) => console.error("Failed to fetch user list", error));
}
function isBlank(str) {
  return !str || /^\s*$/.test(str);
}
function textToLinesArray(text) {
  // Split the text into an array of lines
  var linesArray = text.split("\n");

  // Return the array of lines
  return linesArray;
}

function collectEditedList() {
  const rawData = _el("textarea").value;
  const arr = textToLinesArray(rawData);
  const links = arr.filter((link) => {
    console.log("done");
    return !isBlank(link);
  });

  return links;
}
