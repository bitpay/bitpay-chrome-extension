// background.js
var activeTab
// Called when the user clicks on the browser action.
//chrome.browserAction.onClicked.addListener(function(tab) {
    // Send a message to the active tab
   
//})
console.log('activeTab',activeTab)

chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    //)
    switch(request.type) {
        case "dom-loaded":
           if(request.data.cryptoAccepted == true){
                    chrome.browserAction.setPopup({
                        tabId: sender.tab.id,
                        popup: 'accepted.html'
                    });

                  chrome.browserAction.setIcon({
                    path : "icon48.png",
                    tabId: sender.tab.id
                    });
            }else{
                chrome.browserAction.setPopup({
                    tabId: sender.tab.id,
                    popup: 'notaccepted.html'
                });

                chrome.browserAction.setIcon({
                    path : "iconbg.png",
                    tabId: sender.tab.id
                  });
                 
            }
            
        break;
    }
    return true;
});
