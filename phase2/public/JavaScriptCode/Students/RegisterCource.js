window.onload = initalScreen;
document.querySelector('#submit').addEventListener('click', SearchCource);
async function SearchCource(e) {
    e.preventDefault(); 

    // let courses = JSON.parse(localStorage.getItem("courses")) || [];
     const type = document.getElementById('TypeSearch').value;
     const searchValue = document.getElementById('search').value.trim();

    let filteredCourses = [];
    let response=1;
    if (type === "Name") {
     //   filteredCourses = courses.filter(course => course.name.toLowerCase().includes(searchValue));
      response = await fetch(`/api/cources/name/${searchValue}`);

    } else {
      //  filteredCourses = courses.filter(course => course.category.toLowerCase().includes(searchValue));
      response = await fetch(`/api/cources/category/${searchValue}`);

    }
    filteredCourses = await response.json();

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
    const response = await fetch(`/api/classess`);
classess = await response.json(); 
    if(classess){
        displayCourses(classess);
    }  
}
async function getRegisterTable()
{
    const response = await fetch(`/api/register`);
    registerration = await response.json(); 
    return registerration;
}
async function getInfoClass(id)
{
    const response = await fetch(`/api/classess/${id}`);
     const classe = await response.json();     
    return classe;
}
async function checkPassPrequsite(infoClass)
{
    let prerequisite = infoClass.prerequisite.split("/");
    if(prerequisite[0]==="None"){
        console.log("none")
        return true;

    }
    //let register=getRegisterTable();
    let name = document.getElementById('UserName').textContent;
    for(let i=0;i<prerequisite.length;i++)
    {
        const response = await fetch(`/api/register/${prerequisite[i]}/${name}`);
        isCom = await response.json();
        if(isCom)
        { 
            console.log("pass")
            return true;
            
        }
    }
    console.log("not pass")
    return false;
    
}

function failRegister()
{
    alert("fail register");

}
async function modifyAvaliableSeats(id)
{
   
    // let Precource=Precources.find(cource=>cource.id == id && cource.validation!="Unvalid")
    // cource=cources.find(cource=>cource.id==id)
    // cource.available_seats-=1;
    // Precource.available_seats-=1;
    const response = await fetch(`/api/classess`);
    classess = await response.json(); 
    displayCourses(classess);
}
async function addRegisterRecord(courceName,instructor,studentName,id)
{
    registerration={
        "id": id,
        "course_name": courceName,
        "instructor": instructor,
        "name":studentName,
        "grade":"",
        "status":"Pending",
      }
      

        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(registerration)
          });    
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
    //let registerration=getRegisterTable();
    const response = await fetch(`/api/register/repeat/${courceName}/${document.getElementById('UserName').textContent}`);
    isCom = await response.json();
    return !isCom;
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
   
  

    assginUserName();
    loadCourses();
    getRegisterTable();
    
}
