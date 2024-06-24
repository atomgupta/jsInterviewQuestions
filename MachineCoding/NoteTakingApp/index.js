let createButton= document.getElementById('create-note')
let notesContainer=document.getElementById('notes-container')


createButton.addEventListener('click',()=>{
    console.log("clicked")
    
let newNote= document.createElement('div')
newNote.classList.add('note-parent')
let noteText=document.createElement('p')
noteText.classList.add('note-text')
noteText.setAttribute('contenteditable','true')
 
newNote.appendChild(noteText)
let controlbuttonsContainer=document.createElement('div')
controlbuttonsContainer.classList.add('control-buttons')
let deletebutton= document.createElement('button')
deletebutton.innerText='Delete'
deletebutton.classList.add('delete-note')
let saveButton=document.createElement('button')
saveButton.innerText='Save'
saveButton.classList.add('save-note')
controlbuttonsContainer.appendChild(saveButton)
controlbuttonsContainer.appendChild(deletebutton)

newNote.appendChild(controlbuttonsContainer)

notesContainer.appendChild(newNote)
})
function saveDataToStorage(){
    localStorage.setItem('notes',notesContainer.innerHTML)
}

function showData(){
    notesContainer.innerHTML=(localStorage.getItem('notes'))
}
document.addEventListener('click',(e)=>{
if(e.target.classList.contains('delete-note')){
    e.target.parentElement.parentElement.remove()
}
else if( e.target.classList.contains('save-note')){
    saveDataToStorage()
}
})
showData()