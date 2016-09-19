document.addEventListener("click", function(e) {
  if (!e.target.classList.contains("click_option")) {
    return;
  }
  var linklyChoice = e.target.textContent;
  chrome.tabs.executeScript(null, {
    file: "/content_scripts/linkly.js"
  });


  function getCurrentTab(){
    return new Promise(function(resolve, reject){
      chrome.tabs.query({
        active: true,               // Select active tabs
        lastFocusedWindow: true     // In the current window
      }, function(tabs) {
        resolve(tabs[0]);
      });
    });
  }

  getCurrentTab().then(function(tab){
    var linklyTab = tab.url;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {linklyURL: linklyTab, linklyChoice: linklyChoice});
  });
  });
});
