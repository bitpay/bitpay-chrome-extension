
window.addEventListener("load", function() {
   let bpDiv = document.getElementById("bpDiv123119");
    if (bpDiv == false || bpDiv == null) {
        chrome.extension.sendMessage({
            type: "dom-loaded", 
            data: {
                cryptoAccepted: false
            }
        });
    } else {
        chrome.extension.sendMessage({
            type: "dom-loaded", 
            data: {
                cryptoAccepted: true
            }
        });
        
    }
    
}, true);

