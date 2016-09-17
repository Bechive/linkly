document.addEventListener("click", function(e) {
  if (!e.target.classList.contains("click_option")) {
    return;
  }
  var linklyChoice = e.target.textContent;
  chrome.tabs.executeScript(null, {
    file: "/content_scripts/linkly.js"
  });
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {linklyURL: linklyChoice});
  });
});
