let coursesInfo = "../../../DataBaseCode/ClassessDataBase.json";
let courses = localStorage.classes ? JSON.parse(localStorage.classes) : [];
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
    displayCourses(Precourses.filter(e=>e.validation=="valid"),'.open');
    displayCourses(Precourses.filter(e=>e.validation=="Unvalid"),'.in-progress');
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
    courses=Precourses.filter(course=>course.validation!="Unvalid");
    localStorage.setItem('classes',JSON.stringify(courses))
    loadCourses()
}
function cancel(id){
    const Precourses = JSON.parse(localStorage.getItem('Precourses'));
    const course=Precourses.find(e=>e.id==id);
    course.validation="Unvalid";
    localStorage.setItem('Precourses',JSON.stringify(Precourses))
    courses=Precourses.filter(course=>course.validation=="valid");
    localStorage.setItem('classes',JSON.stringify(courses))
    loadCourses()
}
function displayCourses(courses,query) {
    
    let container = document.querySelector(query);
    container.innerHTML="";
    courses.forEach(course => { 
        if(query =='.open'){
            container.innerHTML += `
         
            <h3>${course.course_name}</h3>
            <p>Number of students: ${course.seats-course.available_seats}</p>
            <p>status: open for regestration</p>
            
        `;
        }  
        else if(query =='.pending'){
            container.innerHTML += `
            <h3>${course.course_name}</h3>
            <p>Number of students: ${course.seats-course.available_seats}</p>
            <p>status: pending validation</p>
            <button class="validate" onclick="validatation(${course.id})">validate</button>
            <button class="cancel" onclick="cancel(${course.id})">cancel</button>
        `;

        
        }
        else if(query =='.in-progress'){
            container.innerHTML += `
            <h3>${course.course_name}</h3>
            <p>Number of students: ${course.seats-course.available_seats}</p>
            <p>status: pending validation</p>
        `;
        }
        
    });
}
async function initalScreen() {
    loadCourses();
    assginUserName();
}