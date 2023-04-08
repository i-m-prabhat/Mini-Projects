console.log("Hello world");
function getAnUpdate(){
       console.log("Updating List...");
    tit = document.getElementById('title').value;
    desc = document.getElementById('des').value;
    if(localStorage.getItem('itemsJson')==null){
        itemJsonArray = [];
        itemJsonArray.push([tit,desc]);
        localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray))
    }
    else{
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([tit,desc]);
        localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray))
    }
update()
}
function update(){
    if(localStorage.getItem('itemsJson')==null){
        itemJsonArray = [];
        localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray))
    }
     else{
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr);
    }
    //populate the Table
    let tableBody = document.getElementById("tablebody");
    let str = "";
    itemJsonArray.forEach((element,index) =>{
        str += `
        <tr>
            <th scope="row">${index+1}</th>
            <th>${element[0]}</th>
            <td>${element[1]}</td>
            <td><button onclick="deleted(${index})" class="btn btn-danger btn-sm">Delete</button></td>
        </tr> `
    });
    tableBody.innerHTML = str;
}
let add = document.getElementById("add");
add.addEventListener("click", getAnUpdate);
update();

function deleted(itemIndex){
    console.log("Delete",itemIndex);
    if(confirm("Are You sure Want to delete this Todo?")){
    itemJsonArrayStr = localStorage.getItem('itemsJson')
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    //delete item index element from the array 
    itemJsonArray.splice(itemIndex,1)
    localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray))
    update();
    }
}

function clearList(){
if(confirm("Are You sure Want to Clear this Todo List?")){
    localStorage.clear();
    update();
}
}