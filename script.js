const editInput = document.querySelector(".edit-input");
const editButton = document.querySelector(".edit-button");
const boxesNumViewer = document.querySelector(".boxes-num");
const colorInput = document.querySelector("#color");
let currentBoxes = 16  * 16;
let currentColor = "#000000";
// Regenerating The Boxes When Entering A new Boxes Number

editButton.addEventListener("click",()=>{
 if(!editInput.value) throw new Error("Empty input is not allowed");
 if(editInput.validity.rangeOverflow || editInput.validity.rangeUnderflow) throw new Error("Value range is between 16 and 64");
 const newBoxesNumPerRow = editInput.value;
 boxesNumViewer.textContent = newBoxesNumPerRow;
 currentBoxes = newBoxesNumPerRow;
 generateBoxes(newBoxesNumPerRow * newBoxesNumPerRow);
})

colorInput.addEventListener("change",(e)=>{
  currentColor = e.target.value;
})



// generating boxes function

 function generateBoxes(boxesNum) {
  
  const container = document.querySelector(".container");
  container.textContent = "";
  const containerWidth = container.clientWidth;
  const boxesPerRow = Math.sqrt(boxesNum);
  for(let i = 0;i<boxesPerRow;i++) {
    const row = document.createElement("div");
    row.style.display = "flex";
    for(let j = 0;j<boxesPerRow;j++) {
      const box = document.createElement("div");
      const boxSize = `${containerWidth / boxesPerRow}px`;
      box.style.width = boxSize;
      box.style.height = boxSize;
      box.classList.add("box");
      row.appendChild(box);
    }
    container.appendChild(row);
  }
  attachBoxListeners();
}


//initializing 
generateBoxes(currentBoxes);

function attachBoxListeners() {
const boxes = document.querySelectorAll(".box");
 let isDrawing = false;
boxes.forEach(box => {
   box.addEventListener("mouseenter",(e) => {
    if(!isDrawing) return;
    draw(e.target,currentColor);
   });
  box.addEventListener("mousedown",(e)=>{
   isDrawing = true;
   draw(e.target,currentColor);
  })
  box.addEventListener("mouseup",()=> isDrawing = false);
})
}
function draw(element,color) {

element.style.backgroundColor = color;
}

