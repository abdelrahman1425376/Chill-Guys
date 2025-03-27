let coursesInfo = "../../../DataBaseCode/ClassessDataBase.json";
let courses = localStorage.courses ? JSON.parse(localStorage.courses) : [];
window.onload = initalScreen;
function navigateTo(page) {
    window.location.href = `${page}?username=${encodeURIComponent(document.getElementById('UserName').textContent)}`;
}
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  } 

async function assginUserName()
{
    const username = getQueryParam('username');
    const welcomeMessage = document.getElementById('UserName');
    welcomeMessage.textContent = ` ${username}`;  
}
async function loadCourses() {
           
    const storage = localStorage.getItem('Precourses');
if (storage) {
    const Precourses=JSON.parse(storage);
    displayCourses(Precourses.filter(e=>e.validation=="None"),'.pending');
    displayCourses(courses,'.open');
} else {
    const response = await fetch(coursesInfo);
    const Precourses = await response.json();
    localStorage.setItem('Precourses', JSON.stringify(Precourses));
    displayCourses(Precourses.filter(e=>e.validation=="None"),'.pending');

}

}
function validatation(id){
    const Precourses = JSON.parse(localStorage.getItem('Precourses'));
    const course=Precourses.find(e=>e.id==id);
    course.validation="valid";
    localStorage.setItem('Precourses',JSON.stringify(Precourses))
    courses.push(course);
    localStorage.setItem('courses',JSON.stringify(courses))
    displayCourses(Precourses.filter(e=>e.validation=="None"),'.pending');
    displayCourses(courses,'.open');
}
function displayCourses(courses,query) {
    
    let container = document.querySelector(query);
    container.innerHTML="";
    courses.forEach(course => { 
        if(query =='.open'){
            container.innerHTML += `
         
            <h3>${course.course_name}</h3>
            <p>status: open for regestration</p>
            <button class="cancel">cancel</button>
        `;
        }  
        else if(query =='.pending'){
            container.innerHTML += `
            <h3>${course.course_name}</h3>
            <p>status: pending validation</p>
            <button class="validate" onclick="validatation(${course.id})">validate</button>
            <button class="cancel">cancel</button>
        `;

        
        }
        
    });
}
async function initalScreen() {
    loadCourses();
    assginUserName();
}