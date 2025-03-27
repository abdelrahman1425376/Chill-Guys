
let coursesInfo = "../../../DataBaseCode/ClassessDataBase.json";
let RegisterationInfo="../../../DataBaseCode/RegestrationDataBase.json";
window.onload = initalScreen;
document.querySelector('.register-btn').addEventListener('click', registerClass);
document.querySelector('#submit').addEventListener('click', SearchCource);


async function loadRegister()
{
   
}





async function SearchCource(e) {
    let courses = localStorage.getItem('courses');
    const type = document.getElementById('TypeSearch').value;
    if(type==="Name")
        courses = courses.filter(u =>  u.course_name === document.getElementById('search').value  );
    else
       courses = courses.filter(u =>   u.category === document.getElementById('search').value );
    if(courses.length===0)
        loadCourses();
    else
       displayCourses(courses);
    
 }
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }  
  async function loadCourses() {
           
    const storage = localStorage.getItem('courses');
    
    displayCourses(JSON.parse(storage));
    
   
}
function getRegisterTable()
{
    const storage = localStorage.getItem('registerration');
    if (!storage) {
        localStorage.setItem('registerration', JSON.stringify([]));  
    }
}
async function getInfoClass(id)
{
    let courses = [];
        const response = await fetch(coursesInfo);
        courses = await response.json();
        return courses.find(e=>e.id===id);
}
async function checkPassPrequsite(infoClass)
{
    let prerequisite = infoClass.prerequisite.split("/");
    if(prerequisite[0]==="None"){
        console.log("none")
        return true;

    }
    let register=getRegisterTable();
    for(let i=0;i<prerequisite.length;i++)
    {
        if(!register.find(e=>e.course_name===prerequisite[i]))
        {
            console.log("not pass")
            return false;
        }
    }
    console.log("pass")
    return true;
}
async function checkAvaliableSeats(infoClass)
{
    let prerequisite = infoClass.prerequisite.split("/");
    if(prerequisite[0]==="None"){
        console.log("none")
        return true;

    }
    let register=getRegisterTable();
    for(let i=0;i<prerequisite.length;i++)
    {
        if(!register.find(e=>e.course_name===prerequisite[i]))
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
    let cources=JSON.parse(localStorage.getItem('courses'));
    cources[id-1].available_seats-=1;
    localStorage.setItem('courses', JSON.stringify(cources));
    displayCourses(cources);
}
function addRegisterRecord(courceName,instructor,studentName)
{
    let registerration=JSON.parse(localStorage.getItem('registerration'));
    registerration.push({
        "id": registerration.length,
        "course_name": courceName,
        "instructor": instructor,
        "name":studentName,
        "grade":"",
        "statusRegster":"3"
      })
    localStorage.setItem('registerration', JSON.stringify(registerration));
}
function SuccusesRegister(infoClass)
{
    modifyAvaliableSeats(infoClass.id);
    console.log()
    addRegisterRecord(infoClass.course_name,infoClass.instructor,document.getElementById('UserName').textContent)
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
    welcomeMessage.textContent = ` ${username}`;  
}
async function initalScreen() {
    loadCourses();
    getRegisterTable();
    assginUserName();
}
