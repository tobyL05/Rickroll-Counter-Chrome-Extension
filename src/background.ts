console.log("Background scripts go here")

chrome.runtime.onInstalled.addListener(() => {
    console.log("Rick roll counter installed!")
    chrome.storage.sync.set({"num_rickrolled" : 0})
})

export {}