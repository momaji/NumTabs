//Getting and initializing extension ui elements
let countbtn = document.getElementById("count");
let tabNumber = document.getElementById("tabNumber");
tabNumber.textContent = '?';
// console.log('loaded')
// debugger;

//Set Button color to user's preference
chrome.storage.sync.get("color", ({ color }) => {
  countbtn.style.backgroundColor = color;
});

//When count button is clicked count number of tabs and set number
countbtn.addEventListener("click", countTabs)

//counts current number and sets the UI element
function countTabs(){
    query = {currentWindow:true}
    chrome.tabs.query(query, function(data){
        tabNumber.textContent = data.length
    })

    //get from storage
    // chrome.storage.sync.get("color", ({color})=>{
    //           document.body.style.backgroundColor = color;
    //        });

}