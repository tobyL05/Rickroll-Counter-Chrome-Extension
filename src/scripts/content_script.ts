console.log("Content Script injected! - Rickroll Counter Extension")
chrome.storage.sync.get(["num_rickrolled"]).then((result) => {
    let num : number = result["num_rickrolled"] + 1
    chrome.storage.sync.set({"num_rickrolled": num}).then(() => {
        console.log("Incremented num_rickrolled")
    })
    chrome.runtime.sendMessage({
        type: "storage",
        message: "updated num_rickrolled"
    })
    alert("You just got Rickrolled!\n You've been Rickrolled a total of " + num + " times\n\n" + "- Rickroll Counter Extension")
})

export {}