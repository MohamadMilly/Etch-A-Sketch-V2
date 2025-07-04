const editInput = document.querySelector(".edit-input");
const editButton = document.querySelector(".edit-button");

// Regenerating The Boxes When Entering A new Boxes Number

editButton.addEventListener("click",()=>{
 if(!editInput.validity.valueMissing) throw new Error("Empty input is not allowed");
 if(editInput.validity.rangeOverflow || edit.validity.rangeUnderflow) throw new Error("Value range is between 16 and 64");
 const newBoxesNum = editInput.value;
 generateBoxes(newBoxesNum);
})


// generating boxes function
