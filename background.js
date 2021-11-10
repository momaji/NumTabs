//Event listeners for adding, deleting, changing and switching tabs and windows
chrome.runtime.onInstalled.addListener(()=>countTabs())
chrome.tabs.onActivated.addListener(() => countTabs())
chrome.tabs.onUpdated.addListener(() => countTabs())
chrome.tabs.onRemoved.addListener(()=>countTabs())
chrome.windows.onFocusChanged.addListener(() => countTabs())

//counts current number of tabs and sets the badge to show it
function countTabs(){
  chrome.tabs.query({currentWindow:true}, function(data){
    chrome.tabs.query({currentWindow:true, active:true}, function(curTab){
      chrome.action.setBadgeText(
        {
          text: `${data.length}`,
          tabId: curTab[0].id
        },
        ()=>{}
      );
    });
  });
};