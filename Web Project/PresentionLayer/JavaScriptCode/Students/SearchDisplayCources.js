let coursesInfo = "../../../DataBaseCode/CourceDataBase.json";
window.onload = initalScreen;
document.getElementById('submit').addEventListener('click', SearchCource);

function SearchCource(e) {
    e.preventDefault(); 

    let courses = JSON.parse(localStorage.getItem("courses")) || [];
    const type = document.getElementById('TypeSearch').value;
    const searchValue = document.getElementById('search').value.trim().toLowerCase();

    let filteredCourses = [];

    if (type === "Name") {
        filteredCourses = courses.filter(course => course.name.toLowerCase().includes(searchValue));
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
    let courses = [];
    const storage=localStorage.getItem("courses");
    if(storage){
        courses=JSON.parse(localStorage.getItem("courses"))
    }
    
    else{
        
        const response = await fetch(coursesInfo);
        courses = await response.json();
        localStorage.setItem("courses",JSON.stringify(courses))
    }
   
    
   
    
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

