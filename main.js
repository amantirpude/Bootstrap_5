let itemList = document.getElementById("items");
let form = document.getElementById("add-form");
    
form.addEventListener('button', onsignup);
itemList.addEventListener("click",removeItem);
let myObj_Ser;
function onsignup(event){
    event.preventDefault();
    let myObj = {
        date: event.target.date.value,
        amount: event.target.amount.value,
        description: event.target.description.value,
        category: event.target.category.value,
    }
    myObj_Ser = JSON.stringify(myObj);
    localStorage.setItem(event.target.date.value, myObj_Ser);
    

    //Add Item
    // Create new li element
    let li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    // Add text node with input value
    let print = myObj.date + "->" + myObj.amount + "->" + myObj.description + "->" + myObj.category;
    li.appendChild(document.createTextNode(print));

    // Create del button element
    let deleteBtn = document.createElement('button');
  
    // Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  
    // Append text node
    deleteBtn.appendChild(document.createTextNode('Delete Expense'));
    deleteBtn.onclick = () =>{
      localStorage.removeItem(myObj.date);
    }

    //Create Edit Button
    let editBtn = document.createElement('button');
    editBtn.className = 'edit';
    editBtn.appendChild(document.createTextNode('Edit Expense'));
    editBtn.onclick = () =>{
      let itemDate = document.getElementById("date");
      itemDate.value = myObj.date;
      let itemAmount = document.getElementById("amount");
      itemAmount.value = myObj.amount;
      let itemDescription = document.getElementById("description");
      itemDescription.value = myObj.description;
      let itemCategory = document.getElementById("category");
      itemCategory.value = myObj.category;
      localStorage.removeItem(myObj.date);
    }

    li.appendChild(editBtn);
    
    // Append button to li
    li.appendChild(deleteBtn);
  
    // Append li to list
    itemList.appendChild(li);
    //make list input bar empty after adding expense
    document.getElementById("date").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("description").value = "";
    document.getElementById("category").value = "";
  }
  
  // Remove item
  function removeItem(e){
    if(e.target.classList.contains('delete')){
      if(confirm('Are You Sure?')){
        let li = e.target.parentElement;
        itemList.removeChild(li);
      }
    }
    if(e.target.classList.contains('edit')){
      if(confirm('Are You Sure?')){
        let li = e.target.parentElement;
        itemList.removeChild(li);
      }
    }
  }
