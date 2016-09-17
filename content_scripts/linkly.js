function linkly(request, sender, sendResponse) {
  removeEverything();
  insertLinkly(request.linklyURL);
}

function removeEverything() {
  while (document.body.firstChild) {
    document.body.firstChild.remove();
  }
}
function insertLinkly(linklyURL) {
  var linklyText = document.createTextNode(linklyURL);
  document.body.appendChild(linklyText);
}

chrome.runtime.onMessage.addListener(linkly);
