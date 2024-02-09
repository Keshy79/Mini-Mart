

var itemarray=[]
function addItem(){
    if(inp.value == "" || inp2.value == "") {
        alert("Kindly fill all inputs")
    }else{
        itemobj={
            item:inp.value,
            amount:inp2.value
        }
      itemarray.push(itemobj)
      loady()
      btnHolder.innerHTML=`
      <div class="container-fluid mx-auto col-lg-7 col-10 shadow-sm my-4 p-3">
      <button class="btn btn-sm btn-dark mx-2 my-2" onclick="begin()">Add to beginning</button>
      <button class="btn btn-sm btn-dark mx-2 my-2" onclick="first()">Delete first</button>
      <button class="btn btn-sm btn-dark mx-2 my-2" onclick="last()">Delete Last</button>
      <button class="btn btn-sm btn-dark mx-2 my-2" onclick="any()">Delete Any</button>
      <!-- <button class="btn btn-sm btn-dark mx-2 my-2" id="myButton" " onclick="openModal()">Edit</button> -->
      <button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Edit</button>
      <button class="btn btn-sm btn-dark mx-2 my-2" onclick="deleteAll()">Delete All</button>
      </div> ` 
      
      console.log(itemarray);

    }
}
function begin() {
    if (inp.value !== "" || inp2.value !=="") {
       
        itemarray.unshift({
            item:inp.value,
            amount:inp2.value
        })
        loady()
        console.log(cart);
    
    } else {
        alert("Fill in the space now")
    }
}

function first() {
    // if (inp.value !== "") {
    itemarray.shift()
    loady()
}

function last() {
    itemarray.pop()
    loady()
    // }
    // } else {
    //     alert("Fill in the space now")
    // }
}


function any() {
    var index = prompt("Enter the index you are deleting")
    
    itemarray.splice(index-1, 1,)
    loady()
}

function deleteAll() {
    let confirmation = confirm("Are you sure you want to proceed?");
    if(confirmation){
        itemarray.splice(0, itemarray.length);
        loady()
    }else{
        loady()
    }
}


function displaycart() {
    show.innerHTML =""
    for (i=0; i < cart.length; i++) {
        var element = cart[i]
        show.innerHTML += `
        <p>${i + 1}. ${element} </p>
        <Button class="btn btn-dark btn-sm" onclick="del(${i})">Delete</Button>
        <Button class="btn btn-dark btn-sm">Edit</Button>`
    }
}

function del(index) {
    console.log(index);
    cart.slice(index,1);
    displaycart()
    document.getElementById("inp").value =""

}


function handleEdit(){
    show.innerHTML=""
    itemobj={
        item:content.value,
        amount:content2.value
    }
    itemarray.splice(idno-1, 1,itemobj )
    loady()
}

function loady(){
    inp.value=""
    inp2.value=""
        table.innerHTML=`
        <tr>
                <th>S/N</th>
                <th>ITem</th>
                <th>Amount</th>
                <th>ACTIONS</th>
              </tr>
        `
        for (let index = 0; index < itemarray.length; index++) {
            table.innerHTML +=`
            <tr>
                <th>${index + 1}</th>
                <th>${itemarray[index].item}</th>
                <th>${itemarray[index].amount}</th>
                <th>
                  <button class="btn btn-info me-3" onclick="del(${index})">Delete</button>
                  <button class="btn btn-danger " onclick="edt(${index})">Edit</button>
                </th>
              </tr>
            `
        }

}

function edt(index) {
    let newItem = prompt("Enter new item");
    let newAmount = prompt("Enter new amount");

    if (newItem !== null && newAmount !== null) {
        itemarray[index].item = newItem;
        itemarray[index].amount = newAmount;
        loady();
    }
}

function del(deleted){
    itemarray.splice(deleted, 1)
    loady()
}




// var cartoon = ['kenny', 'Ayo', 'Taiwo']
// cartoon.map((info, i)=>{
//     console.log(i, info);
// })

// cartoon.map(function(info, i) {
//     console.log(i, info);
// })

// for (let index = 0; index < cartoon.length; index++) {
//     var element = cartoon[index];
//     console.log(index, element);
    
// }



// // let age = [1,2,3,4,]
// // console.log(age[0]);
// // Array.push()




// // let student1 ={
// //     age: 10,
// //     class: 2,
// // }
// // console.log(student1.age);


// // let student2 ={
// //     age: 14,
// //     class: 23,
// // }

// let stud =[8,8,9]


// console.log(stud[0]);

// let obj = {
//     age:6,
//     class:2
// }
// console.log(obj.age);

// const student = [
//     {
//         name: 'ola',
//         level: 3,
//     },
//     {
//         name: 'bola',
//         level: 3,
//     },
//     {
//         name: 'tola',
//         level: 3,
//     },
//     {
//         name: 'dele',
//         level: 3,
//     },
//     {
//         name: 'ige',
//         level: 3,
//     },
//     {
//         name: 'ade',
//         level: 3,
//     },
//     {
//         name: 'ola',
//         level: 3,
//     },
// ]
// console.log(student[5].level);