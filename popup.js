document.getElementById("startBlocking").addEventListener("click", () => {
  const usersList = collectEditedList();

  chrome.runtime.sendMessage({ action: "startBlocking", usersList });
});



function _el(selector) {
  return document.querySelector(selector);
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
