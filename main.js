const itemList = document.getElementById("items");
const expenseForm = document.getElementById("add-form");
    
expenseForm.addEventListener('button', onsignup);
itemList.addEventListener("click",removeItem);

const dateInput = expenseForm["date"];
const amountInput = expenseForm["amount"];
const descriptionInput = expenseForm["description"];
const categoryInput = expenseForm["category"];

const addElement = (date, amount, description, category) =>{
  console.log(typeof date)
    const myObj = {
        date:date,
        amount:amount,
        description:description,
        category:category
    }
    localStorage.setItem(date, JSON.stringify(myObj));
    return {date, amount, description, category};
}

const createElement = ({date, amount, description, category}) =>{
    const li = document.createElement("li");
    const deleteBtn = document.createElement("button");
    const editBtn = document.createElement("button");

    li.innerText = `${date} -> ${amount} -> ${description} -> ${category}`;
    deleteBtn.className = "delete";
    editBtn.className = "edit";
    deleteBtn.appendChild(document.createTextNode("Delete Expense"));
    editBtn.appendChild(document.createTextNode("Edit Expense"));
    li.append(deleteBtn,editBtn);
    itemList.append(li);
    deleteItem(deleteBtn,date);
    editItem(editBtn,date, amount, description, category)
}
function onsignup(e){
    e.preventDefault();

    const newExpense = addElement(
        dateInput.value,
        amountInput.value,
        descriptionInput.value,
        categoryInput.value
    )
    createElement(newExpense);
    dateInput.value = "";
    amountInput.value = "";
    descriptionInput.value= "";
    categoryInput.value = "";
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            let del = e.target.parentElement;
            itemList.removeChild(del);
        }
    }
    if(e.target.classList.contains('edit')){
        if(confirm('Are You Sure?')){
            let ed = e.target.parentElement;
            itemList.removeChild(ed);
        }
    }
}

const deleteItem = (deleteBtn,date) =>{
    deleteBtn.onclick = () =>{
        localStorage.removeItem(date);
    }
}

const editItem = (editBtn,date, amount, description, category) =>{
    editBtn.onclick = () =>{
        let itemDate = document.getElementById("date");
        itemDate.value = date;
        let itemAmount = document.getElementById("amount");
        itemAmount.value = amount;
        let itemDescription = document.getElementById("description");
        itemDescription.value = description;
        let itemCategory = document.getElementById("category");
        itemCategory.value = category;
        localStorage.removeItem(date);
    }
}
function iterate(){
  Object.keys(localStorage).forEach(key =>{
    createElement((JSON.parse(localStorage.getItem(key))))
  })
}

iterate();

// function onsignup(event){
//     event.preventDefault();
//     let myObj = {
//         date: event.target.date.value,
//         amount: event.target.amount.value,
//         description: event.target.description.value,
//         category: event.target.category.value,
//     }
//     myObj_Ser = JSON.stringify(myObj);
//     localStorage.setItem(myObj.date, myObj_Ser);

    
//     let li = addElement("li", "list-group-item", myObj.date + "->" + myObj.amount + "->" + myObj.description + "->" + myObj.category);

//     let deleteBtn = addElement("button", "btn btn-danger btn-sm float-right delete", "Delete Expense")

//     let editBtn = addElement("button", "edit", "Edit Expense")
//     li.append(editBtn,deleteBtn);

//     // Append li to list
//     itemList.appendChild(li);

//     //edit or delete item from localstorage
//     editItem(editBtn,myObj.date);
//     deleteItem(deleteBtn,myObj.date);

//     //make list input bars empty after adding expense
//     document.getElementById("date").value = "";
//     document.getElementById("amount").value = "";
//     document.getElementById("description").value = "";
//     document.getElementById("category").value = "";
//   }
  
//   // Remove item
//   function removeItem(e){
//     if(e.target.classList.contains('delete')){
//       if(confirm('Are You Sure?')){
//         let li = e.target.parentElement;
//         itemList.removeChild(li);
//       }
//     }
//     if(e.target.classList.contains('edit')){
//       if(confirm('Are You Sure?')){
//         let li = e.target.parentElement;
//         itemList.removeChild(li);
//       }
//     }
//   }

//   //Add new element to the page
//   const addElement = (elementName, clName, print) =>{
//     let element = document.createElement(elementName);
//     // Add class
//     element.className = clName;
//     // Add text node with input value
//     element.appendChild(document.createTextNode(print));
//     return element;
//   }
// //delete item from the localstorage
// const deleteItem = (deleteBtn,date) =>{
//     deleteBtn.onclick = () =>{
//         localStorage.removeItem(date);
//     }
// }

// //edit item from the localstorage
// const editItem = (editBtn,date, amount, description, category) =>{
//     editBtn.onclick = () =>{
//         let itemDate = document.getElementById("date");
//         itemDate.value = date;
//         let itemAmount = document.getElementById("amount");
//         itemAmount.value = amount;
//         let itemDescription = document.getElementById("description");
//         itemDescription.value = description;
//         let itemCategory = document.getElementById("category");
//         itemCategory.value = category;
//         localStorage.removeItem(date);
//     }
// }