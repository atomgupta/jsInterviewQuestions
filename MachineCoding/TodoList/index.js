const inputBox=document.getElementById('input-box')
const list=document.getElementById('list-parent')
console.log("listtt",list)
const addButton=document.getElementById('add-task')

inputBox.addEventListener('keyup',(e)=>{
    if(e.key.toLocaleLowerCase()=='enter'){
        if(inputBox.value.trim().toLocaleLowerCase()==''){
            alert('pls enter something')
        }
        else{
            addTask()
        }
    }
})
function addTask(){
    if(inputBox.value.trim()=== ''){
        alert('input is empty!!')
    }
    else{
        let newListItem=document.createElement('li')
        newListItem.innerHTML=inputBox.value.trim()
        let span=document.createElement('span')
        span.innerHTML='\u00d7'
        newListItem.appendChild(span)
        list.appendChild(newListItem)
        saveData()
        inputBox.value=''
        inputBox.focus()
    }
}
addButton.addEventListener('click',addTask)

list.addEventListener('click',(e)=>{
    if(e.target.tagName.toLowerCase()=='li'){
        e.target.classList.toggle('checked')
        saveData()
    }
    else if( e.target.tagName.toLowerCase()=='span'){
        e.target.parentElement.remove()
        saveData()
    }
    
})

function saveData(){
    localStorage.setItem('listdata',list.innerHTML)
}
function showSavedTasks(){
    list.innerHTML=localStorage.getItem('listdata')
}
showSavedTasks()



