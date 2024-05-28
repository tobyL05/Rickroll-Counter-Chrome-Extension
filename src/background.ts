console.log("Background scripts go here")

const defaultValue = "null";

chrome.runtime.onInstalled.addListener(() => {
    console.log("Rick roll counter installed!")

    chrome.storage.sync.get({"num_rickrolled": defaultValue},(val) => {
        if (val["num_rickrolled"] === defaultValue) {
            chrome.storage.sync.set({"num_rickrolled" : 0})
        }
    })
})

const link = "watch?v=dQw4w9WgXcQ"

chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
    if(details.frameId === 0) {
        // Fires only when details.url === currentTab.url
        chrome.tabs.get(details.tabId, function(tab) {
            if(tab.url === details.url) {
                // console.log(tab.url);
                if (tab.url!.includes(link)) {
                    chrome.tabs.sendMessage(details.tabId, {
                        message: "rickrolled"
                    })
                }
            }
        });
    }
});

export {}