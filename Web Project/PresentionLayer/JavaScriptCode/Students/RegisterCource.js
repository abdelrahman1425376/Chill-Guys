let coursesInfo = "../../../DataBaseCode/ClassessDataBase.json";
let RegisterationInfo="../../../DataBaseCode/RegestrationDataBase.json";
window.onload = initalScreen;
document.querySelector('.register-btn').addEventListener('click', registerClass);
document.querySelector('#submit').addEventListener('click', SearchCource);

async function SearchCource(e) {
    e.preventDefault(); 
    let courses = [];
    const response = await fetch(coursesInfo);
    courses = await response.json();
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
           
        let courses = [];
        const response = await fetch(coursesInfo);
        courses = await response.json();
        displayCourses(courses);
   
}
function getRegisterTable()
{
    const storage = localStorage.getItem('register');
    if (storage) {
        return JSON.parse(storage);
    } else {
        return [];
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
 async function registerClass(id)
{
    let register=getRegisterTable();
    let infoClass=await getInfoClass(id);
    if(await checkPassPrequsite(infoClass)){
    register.push(  register.push({
             "id": id,
             "course_name": "Digital Marketing",
             "category": "Marketing",
             "instructor": "Alice Johnson",
             "seats": 30,
             "available_seats": 8,
             "prerequisite": "Basic Marketing Knowledge"
         }))
    localStorage.setItem('register', JSON.stringify(register));
    alert("done")
}
else
{
    alert("hi")
}
}

//console.log(infoClass.available_seats)
   
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
    assginUserName();
}
