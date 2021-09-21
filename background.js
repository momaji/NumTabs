//This all needs to be replaced by the event listeners for adding and deleting tabs, or changing windows.
//On any of those events the count tabs function should be called on the current window and either update
//the extension text directly or update a storage variable from which the extension ui will pull the number from.
//If the second is the case then it must have an even listener to any change on that variable in storage

let color = "#A020F0" //purple

chrome.runtime.onInstalled.addListener(()=>{
    chrome.storage.sync.set({color})
    console.log('Default background color set to %cpurple', `color: ${color}`)
})