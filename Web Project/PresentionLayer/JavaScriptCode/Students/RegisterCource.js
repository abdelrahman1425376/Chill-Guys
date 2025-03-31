let coursesInfo = "../../../DataBaseCode/ClassessDataBase.json";
let RegisterationInfo="../../../DataBaseCode/RegestrationDataBase.json";






window.onload = initalScreen;
document.querySelector('#submit').addEventListener('click', SearchCource);







function SearchCource(e) {
    e.preventDefault(); 

    let courses = JSON.parse(localStorage.getItem('classes')) || [];
    const type = document.getElementById('TypeSearch').value;
    const searchValue = document.getElementById('search').value.trim().toLowerCase();

    let filteredCourses = [];

    if (type === "Name") {
        filteredCourses = courses.filter(course => course.course_name.toLowerCase().includes(searchValue));
    } else {
        filteredCourses = courses.filter(course => course.category.toLowerCase().includes(searchValue));
    }

    if (filteredCourses.length === 0) {
        loadCourses();
    } else {
        displayCourses(filteredCourses);
    }
}
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }  
  async function loadCourses() {
           
    const storage = localStorage.getItem('classes');
    
    displayCourses(JSON.parse(storage));
    
   
}
function getRegisterTable()
{
    const storage = localStorage.getItem('registerration');
    if (!storage) {
        localStorage.setItem('registerration', JSON.stringify([]));  
    }
    const registerration = localStorage.getItem('registerration');
    return registerration;
}
async function getInfoClass(id)
{
    const courses = JSON.parse(localStorage.getItem('classes'));
    
    return courses.find(e=>e.id==id);
}
async function checkPassPrequsite(infoClass)
{
    let prerequisite = infoClass.prerequisite.split("/");
    if(prerequisite[0]==="None"){
        console.log("none")
        return true;

    }
    let register=JSON.parse(localStorage.getItem('registerration'));
    let name = document.getElementById('UserName').textContent;
    for(let i=0;i<prerequisite.length;i++)
    {
        if(register.find(e=>e.course_name==prerequisite[i] && e.name == name && e.status == "completed"))
        { 
            console.log("pass")
            return true;
            
        }
    }
    console.log("not pass")
    return false;
    
}
async function checkAvaliableSeats(infoClass)
{
    let prerequisite = infoClass.prerequisite.split("/");
    if(prerequisite[0]=="None"){
        console.log("none")
        return true;

    }
    let register=getRegisterTable();
    let name = document.getElementById('UserName').textContent;
    for(let i=0;i<prerequisite.length;i++)
    {
        if(!register.find(e=>e.course_name==prerequisite[i]&& e.name == name))
        {
            console.log("not pass")
            return false;
        }
    }
    console.log("pass")
    return true;
}
function failRegister()
{
    alert("fail register");

}
function modifyAvaliableSeats(id)
{
    let cources=JSON.parse(localStorage.getItem('classes'));
    cource=cources.find(cource=>cource.id==id)
    cource.available_seats-=1;
    localStorage.setItem('classes', JSON.stringify(cources));
    displayCourses(cources);
}
function addRegisterRecord(courceName,instructor,studentName,id)
{
    let registerration=JSON.parse(localStorage.getItem('registerration'));
    registerration.push({
        "id": id,
        "course_name": courceName,
        "instructor": instructor,
        "name":studentName,
        "grade":"",
        "status":"Pending",
        
      })
      
    localStorage.setItem('registerration', JSON.stringify(registerration));
}
function SuccusesRegister(infoClass)
{
    modifyAvaliableSeats(infoClass.id);
    console.log()
    addRegisterRecord(infoClass.course_name,infoClass.instructor,document.getElementById('UserName').textContent,infoClass.id)
 alert("done")
}
async function checkNotRepeatSameCource(courceName)
{
    let registerration=JSON.parse(localStorage.getItem('registerration'));
    return !(registerration.find(e=>e.name===document.getElementById('UserName').textContent &&e.course_name==courceName))
}
 async function registerClass(id)
{
    let infoClass=await getInfoClass(id);
    if(await checkPassPrequsite(infoClass)&&infoClass.available_seats!==0&&await checkNotRepeatSameCource(infoClass.course_name)){
        SuccusesRegister(infoClass);
}
else
{
    failRegister();
}
}

   
function displayCourses(courses) {
    let container = document.getElementById('courceElement');
    container.innerHTML = ''; 
    courses.forEach(course => {    
        container.innerHTML += `
         <tr>
                    <td>${course.id}</td>
                    <td>${course.course_name}</td>
                    <td>${course.category}</td>
                    <td> ${course.instructor}</td>
                    <td>${course.seats}</td>
                    <td>${course.available_seats}</td>
                    <td><button onclick="registerClass(${course.id})" class="register-btn">Register</button></td>
                </tr>
        `;
    });
}

function navigateTo(page) {
    window.location.href = `${page}?username=${encodeURIComponent(document.getElementById('UserName').textContent)}`;
}

async function assginUserName()
{
    const username = getQueryParam('username');
    const welcomeMessage = document.getElementById('UserName');
    welcomeMessage.textContent = `${username.trim()}`;  
}
async function initalScreen() {
    let register=localStorage.getItem("registerration");
if(register){
    register=JSON.parse(localStorage.getItem("registerration"));
}
else{
    const response = await fetch(RegisterationInfo);
    register = await response.json();
    localStorage.setItem("registerration",JSON.stringify(register))
}

    assginUserName();
    loadCourses();
    getRegisterTable();
    
}
