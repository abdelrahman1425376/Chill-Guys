let coursesInfo = "../../../DataBaseCode/CourceDataBase.json";
window.onload = initalScreen;
document.getElementById('submit').addEventListener('click', SearchCource);

async function SearchCource(e) {
    e.preventDefault(); 
    let courses = [];
    const response = await fetch(coursesInfo);
    courses = await response.json();
    const type = document.getElementById('TypeSearch').value;
    if(type==="Name")
        courses = courses.filter(u =>  u.name === document.getElementById('search').value  );
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

function displayCourses(courses) {
    let container = document.getElementById('courceElement');
    container.innerHTML = ''; 

    courses.forEach(course => {
       
        container.innerHTML += `
         <tr>
                    <td>${course.id}</td>
                    <td>${course.name}</td>
                    <td>${course.category}</td> 
                </tr>
            
        `;
    });
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
function navigateTo(page) {
    window.location.href = `${page}?username=${encodeURIComponent(document.getElementById('UserName').textContent)}`;
}

