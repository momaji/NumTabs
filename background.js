//Event listeners for adding, deleting, changing and switching tabs and windows
chrome.runtime.onInstalled.addListener(()=>countTabs())
chrome.tabs.onActivated.addListener(activeInfo => countTabs())
chrome.tabs.onUpdated.addListener(activeInfo => countTabs())
chrome.windows.onFocusChanged.addListener(windowID => countTabs())

//counts current number and sets updates the badge to show
function countTabs(){
    chrome.tabs.query({currentWindow:true}, function(data){
        chrome.action.setBadgeText(
          {
            text: `${data.length}`,
          },
          () => {}
        );
    })
}