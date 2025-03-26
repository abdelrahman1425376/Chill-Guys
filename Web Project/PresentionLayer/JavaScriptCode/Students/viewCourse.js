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
   
function displayCourses(courses,id) {
    let container = document.getElementById(id);
    container.innerHTML = ''; 
    courses.forEach(course => {    
        container.innerHTML += `
         <li>${course.course_name} - Grade: ${course.grade}</li>
        `;
    });
   
}

async function loadCompletedCourses() {
           
    const storage = localStorage.getItem('registerration');
if (storage) {
    displayCourses(JSON.parse(storage).filter(e=>e.statusRegster==1),"completed");
    displayCourses(JSON.parse(storage).filter(e=>e.statusRegster==2),"InProgress");
    displayCourses(JSON.parse(storage).filter(e=>e.statusRegster==3),"Pending");

} 
}

async function initalScreen() {
    loadCompletedCourses();
  
    assginUserName();
}