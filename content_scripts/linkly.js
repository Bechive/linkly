

function linkly(request, sender, sendResponse) {
  console.log("hi");
  switch (request.linklyChoice) {
    case "HTML":
      removeEverything();
      linklyHtml(request.linklyURL);
      break;
    case "Console":
      linklyConsole(request.linklyURL);
      break;
  }
}

function removeEverything() {
  while (document.body.firstChild) {
    document.body.firstChild.remove();
  }
}
function linklyHtml(linklyURL) {
  var linklyText = document.createTextNode(linklyURL);
  document.body.appendChild(linklyText);
}

function linklyConsole(linklyURL) {
  chrome.extension.getBackgroundPage().console.log(linklyURL);
}

chrome.runtime.onMessage.addListener(linkly);
