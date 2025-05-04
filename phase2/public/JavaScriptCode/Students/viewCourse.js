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
    welcomeMessage.textContent = `${username}`;  
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
    let name=document.getElementById('UserName').textContent.trim();
    console.log(name);
           
    let response = await fetch(`/api/register/Status/completed/${name}`);
   let arr= await response.json();
   console.log(arr);
    if (arr) {
    displayCourses(arr,"completed"); 
    } 
   let response1 = await fetch(`/api/register/Status/InProgress/${name}`);
   let arr1= await response1.json();
   console.log(arr1);
    if (arr1) {
    displayCourses(arr1,"InProgress");
    }  
    let response2 = await fetch(`/api/register/Status/Pending/${name}`);
    let arr2= await response2.json();
    console.log(arr2);
    if (arr2) {
    displayCourses(arr2,"Pending");
    } 
 }

async function initalScreen() {
  
    assginUserName();
    loadCompletedCourses();

}