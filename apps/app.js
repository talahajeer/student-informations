'use strict';


function randomizer() {
    let age = Math.floor(Math.random() * (24 - 18 + 1)) + 18;
    return age
}

function getName(email) {
    let name = email.split("@");
    return name[0]
}


function setItem() {
    localStorage.setItem("student", JSON.stringify(studentArr));
    localStorage.setItem("id",JSON.stringify(id))
}
function getItem() {
    let normalObject = JSON.parse(localStorage.getItem("student"));
    let normalId = JSON.parse(localStorage.getItem("id"))
    console.log(normalObject);

    if (normalObject !== null) {
        studentArr.push(normalObject);
        id+=1;
    }
}
let tuition = 0;

function calTotal(tuition){
tuition+=tuition;
let totalChild = document.createElement("tr");
container.appendChild(totalChild);
totalChild.textContent= tuition;
}

let id = 1;
let tableH = ["id", "Name", "Email", "Mobile", "Age", "Tuition"]
let studentArr = [];
function Student(id, name, email, number, age, tuition) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.number = number;
    this.age = age;
    this.tuition = tuition;
    this.newArr = [this.id,this.name,this.email,this.number,this.age,this.tuition]
    console.log(this.newArr);
    studentArr.push(this);
    console.log(this);
}

Student.prototype.render = function () {

    let studentRaw = document.createElement("tr")
    container.appendChild(studentRaw);

    for (let i = 0; i < this.newArr.length; i++) {
        let tableData = document.createElement("td");
        studentRaw.appendChild(tableData);
        tableData.textContent = this.newArr[i];
    }
}




let container = document.getElementById("table");
for (let i = 0; i < tableH.length; i++) {
    let child = document.createElement("th");
    container.appendChild(child);
    child.textContent = tableH[i];
}


// function renderFromLocal (){
// for (let i = 0 ; i<newArr.length ; i++){
//     let studentRaw = document.createElement("tr")
//     container.appendChild(studentRaw);
//         let tableData = document.createElement("td");
//         studentRaw.appendChild(tableData);
//         tableData.textContent = normalObject[i];
// }
// }
// renderFromLocal();


let submitButton = document.getElementById("submit");
submitButton.addEventListener("click", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let name = getName(email);
    let number = document.getElementById("mobileNo").value;
    let age = randomizer();
    let tuition = document.getElementById("tuition").value;
    
    let newStudent = new Student(id, name, email, number, age, tuition);
    getItem();
    setItem();
    newStudent.render();
    calTotal();
    // console.log(name,email,number,age,tuition);
    
}

