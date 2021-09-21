let page = document.getElementById("buttonDiv");
let selectedClassName = "current";
const presetButtonColors = ["#FFA500","#FF0000", "#00FF00", "#0000FF", "#A020F0"] //orange, red, green, blue, purple

//Reacts to button click by marking the selected button and saving the selection
function handleButtonClick(event){
    //Remove styling from the previously selected color
    let current = event.target.parentElement.querySelector(`.${selectedClassName}`);
    if (current && current!== event.target)
        current.classList.remove(selectedClassName)
    
    //Mark the button and selected
    let color = event.target.dataset.color;
    event.target.classList.add(selectedClassName)
    chrome.storage.sync.set({color});  
} 

//Add a button to the page for each supplied color
function constructOptions(buttonColors){
    chrome.storage.sync.get("color", (data)=>{
        let currentColor = data.color
        
        //for each color we were provided
        for (let buttonColor of buttonColors){
            //...create a button with that color...
            let button = document.createElement("button");
            button.dataset.color = buttonColor;
            button.style.backgroundColor = buttonColor;

            //...mark the currently selected color...
            if (buttonColor == currentColor)
                button.classList.add(selectedClassName);
            
            //...and register a listener for when that button is clicked
            button.addEventListener("click", handleButtonClick)
            page.appendChild(button);
        }
    });
}

//Initialize page by constructing the color options
constructOptions(presetButtonColors);